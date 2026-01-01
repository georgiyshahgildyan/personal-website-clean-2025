import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AUTHOR_ID = 'A5011970336';
const OUTPUT_FILE = path.join(__dirname, 'public', 'data', 'publications.json');

async function syncPublications() {
    console.log(`🚀 Starting sync with OpenAlex for Author ID: ${AUTHOR_ID}...`);

    try {
        // We fetch works and sort them by publication year descending
        // We use per_page=100 to get all 77 works in one request
        const url = `https://api.openalex.org/works?filter=author.id:${AUTHOR_ID}&per_page=100&sort=publication_year:desc`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const works = data.results;

        console.log(`📦 Received ${works.length} works from OpenAlex.`);

        const formattedPublications = works.map(work => {
            // Format authors: "A. B. Smith, C. D. Jones, ..."
            const authors = work.authorships
                .map(auth => auth.author.display_name)
                .join(', ');

            // Get venue name (Journal/Book/Conference)
            const venueName = work.primary_location?.source?.display_name || 'Unknown Venue';
            const volume = work.biblio?.volume ? `, Vol. ${work.biblio.volume}` : '';
            const issue = work.biblio?.issue ? `(${work.biblio.issue})` : '';

            return {
                id: work.id.replace('https://openalex.org/', ''),
                title: work.display_name,
                authors: authors,
                venue: `${venueName}${volume}${issue}`,
                year: work.publication_year,
                doi: work.doi || '',
                citations: work.cited_by_count || 0,
                type: work.type || 'journal-article'
            };
        });

        // Write to JSON
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formattedPublications, null, 2));

        console.log(`✅ Successfully synced ${formattedPublications.length} publications.`);
        console.log(`📍 Data saved to: ${OUTPUT_FILE}`);

        // Print some stats
        const totalCitations = formattedPublications.reduce((sum, pub) => sum + pub.citations, 0);
        console.log(`📊 Total Citations: ${totalCitations}`);

    } catch (error) {
        console.error('❌ Error during sync:', error);
    }
}

syncPublications();
