// Using global fetch (available in Node.js 18+)
async function findAuthor() {
    const query = "Georgiy Shakhgildyan";
    const url = `https://api.openalex.org/authors?search=${encodeURIComponent(query)}`;

    console.log(`Searching for author: ${query}...`);
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        data.results.forEach(author => {
            console.log(`\nFound: ${author.display_name}`);
            console.log(`ID: ${author.id}`);
            console.log(`Works count: ${author.works_count}`);
            console.log(`ORCID: ${author.orcid || 'N/A'}`);
            console.log(`Last known institution: ${author.last_known_institutions?.[0]?.display_name || 'N/A'}`);
        });
    } else {
        console.log("Author not found.");
    }
}

findAuthor();
