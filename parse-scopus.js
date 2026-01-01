import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the BibTeX file
const bibFile = fs.readFileSync(path.join(__dirname, 'scopus (1).bib'), 'utf-8');

// Parse BibTeX entries
const entries = [];
const articleRegex = /@ARTICLE\{([^,]+),\s*([\s\S]*?)\n\}/g;

let match;
while ((match = articleRegex.exec(bibFile)) !== null) {
    const key = match[1];
    const content = match[2];

    // Extract fields
    const getField = (fieldName) => {
        const regex = new RegExp(`${fieldName}\\s*=\\s*\\{([^}]+)\\}`, 'i');
        const fieldMatch = content.match(regex);
        return fieldMatch ? fieldMatch[1].trim() : '';
    };

    // Extract citations from note field
    const getCitations = () => {
        const note = getField('note');
        const citedMatch = note.match(/Cited by:\s*(\d+)/);
        return citedMatch ? parseInt(citedMatch[1]) : 0;
    };

    const title = getField('title');
    const authors = getField('author');
    const year = parseInt(getField('year')) || 0;
    const journal = getField('journal');
    const volume = getField('volume');
    const number = getField('number');
    const pages = getField('pages');
    const doi = getField('doi');
    const citations = getCitations();

    // Build venue string
    let venue = journal;
    if (volume) venue += `, ${volume}`;
    if (number) venue += `(${number})`;
    if (pages) venue += `, ${pages}`;

    // Create publication object
    const publication = {
        id: key,
        title,
        authors,
        venue,
        year,
        doi: doi ? `https://doi.org/${doi}` : '',
        citations,
        type: 'journal'
    };

    entries.push(publication);
}

// Sort by year (descending) and then by citations (descending)
entries.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.citations - a.citations;
});

// Write to JSON file
const outputPath = path.join(__dirname, 'public', 'data', 'publications.json');
fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2));

console.log(`✅ Parsed ${entries.length} publications from Scopus BibTeX`);
console.log(`📝 Written to: ${outputPath}`);
console.log(`\nTop 5 most cited:`);
entries
    .sort((a, b) => b.citations - a.citations)
    .slice(0, 5)
    .forEach((pub, i) => {
        console.log(`${i + 1}. [${pub.citations} cites] ${pub.title.substring(0, 60)}...`);
    });
