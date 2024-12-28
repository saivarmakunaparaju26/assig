const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./product_urls.db');

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS product_urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    domain TEXT,
    url TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Function to crawl a single domain and extract product URLs
async function crawlDomain(domain) {
    const url = `https://${domain}`;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Find product links using common patterns
        $('a').each((index, element) => {
            const href = $(element).attr('href');
            if (href && (href.includes('/product/') || href.includes('/item/') || href.includes('/p/'))) {
                // Save the URL to the database
                db.run(`INSERT INTO product_urls (domain, url) VALUES (?, ?)`, [domain, href]);
            }
        });
    } catch (error) {
        console.error(`Error crawling ${domain}:`, error);
    }
}

// Crawl multiple domains
async function crawlDomains(domains) {
    const crawlPromises = domains.map(domain => crawlDomain(domain));
    await Promise.all(crawlPromises);
}


    
    productLinks.forEach(url => {
        db.run(`INSERT INTO product_urls (domain, url) VALUES (?, ?)`, [domain, url]);
    });

    await browser.close();

