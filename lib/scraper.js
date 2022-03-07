const {DEBUG, NODE_ENV} = process.env;

async function scraper(url) {
  console.log('I will scrape from', url);
}

module.exports = {
  scraper
}
