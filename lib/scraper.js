const {DEBUG, NODE_ENV} = process.env;

async function scraper(url) {
  if (DEBUG) console.log('I will scrape from', url);
}

module.exports = {
  scraper
}
