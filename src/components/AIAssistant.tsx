import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from '@/lib/gemini-context';
import { cn } from '@/lib/utils';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Use environment variable for the API key
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (textToSend?: string) => {
        const finalInput = textToSend || input;
        if (!finalInput.trim() || !apiKey) return;

        const userMessage: Message = { role: 'user', content: finalInput };
        setMessages((prev) => [...prev, userMessage]);
        if (!textToSend) setInput('');
        setIsLoading(true);

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

            const chat = model.startChat({
                history: messages.map(m => ({
                    role: m.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: m.content }],
                })),
                generationConfig: {
                    maxOutputTokens: 800,
                },
            });

            const prompt = messages.length === 0
                ? `${SYSTEM_PROMPT}\n\nUser Question: ${finalInput}`
                : finalInput;

            const result = await chat.sendMessage(prompt);
            const response = await result.response;
            const text = response.text();

            setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
        } catch (error: any) {
            console.error('Gemini Error:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later or contact Georgiy directly.' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 left-8 z-50">
            {/* Chat Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-4 rounded-full bg-primary text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-subtle group"
                >
                    <MessageSquare size={24} />
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] md:w-[400px] h-[550px] glass-card flex flex-col shadow-2xl border-primary/20 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-primary/10 rounded-t-2xl">
                        <div className="flex items-center gap-2">
                            <Bot size={20} className="text-primary" />
                            <span className="font-bold text-sm tracking-tight text-foreground/90">Georgiy's Research AI</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-foreground/40 hover:text-foreground transition-colors p-1"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide"
                    >
                        {messages.length === 0 && (
                            <div className="text-center py-10 space-y-4 opacity-70">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Bot size={32} className="text-primary animate-pulse-soft" />
                                </div>
                                <h3 className="font-bold text-base text-foreground">How can I help you?</h3>
                                <p className="text-xs text-foreground/60 leading-relaxed max-w-[200px] mx-auto">
                                    I can explain research areas, discuss publications, or summarize achievements.
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center pt-4">
                                    {['Research areas', 'Recent papers', 'Contact info'].map((hint) => (
                                        <button
                                            key={hint}
                                            onClick={() => handleSend(hint)}
                                            className="text-[10px] px-3 py-1.5 rounded-full glass-card hover:bg-primary/20 transition-colors border-white/5"
                                        >
                                            {hint}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex items-start gap-2 max-w-[85%] animate-in fade-in slide-in-from-bottom-1 duration-300",
                                    m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5",
                                    m.role === 'user' ? "bg-accent/10" : "bg-primary/10"
                                )}>
                                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-primary" />}
                                </div>
                                <div className={cn(
                                    "p-3 rounded-2xl text-[13px] leading-relaxed",
                                    m.role === 'user'
                                        ? "bg-primary text-white rounded-tr-none shadow-lg"
                                        : "glass-card rounded-tl-none border-white/5 shadow-sm text-foreground/90"
                                )}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Loader2 size={14} className="animate-spin text-primary" />
                                </div>
                                <div className="glass-card p-3 rounded-2xl rounded-tl-none border-white/5">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Input */}
                    <div className="p-4 border-t border-white/10 bg-black/20 rounded-b-2xl">
                        {apiKey ? (
                            <div className="flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-1 items-center focus-within:ring-1 focus-within:ring-primary transition-all">
                                <input
                                    type="text"
                                    placeholder="Ask about research..."
                                    className="flex-grow bg-transparent px-4 py-2 text-sm outline-none placeholder:text-foreground/30"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim() || isLoading}
                                    className="p-2.5 rounded-xl bg-primary text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/80 transition-all shadow-lg"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        ) : (
                            <p className="text-[10px] text-center text-foreground/40 italic">
                                AI Assistant is currently offline.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;
