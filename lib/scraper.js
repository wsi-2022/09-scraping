const {DEBUG, NODE_ENV} = process.env;

async function scraper(url) {
  if (DEBUG) console.log('I will scrape from', url);
}

/* DOM scraping notes:

const singleWard = document.querySelector('a[title="Ward 1"]');

const allWards = document.querySelectorAll('a[title^="Ward"]');

const alderman = document.querySelector('a[title="Ward 1"]')
                  .parentElement
                  .nextElementSibling
                  .innerText;
alderman.split('Aldermaan'); -> " Some Name", "&nbsp;Some Name"
*/

module.exports = {
  scraper
}
