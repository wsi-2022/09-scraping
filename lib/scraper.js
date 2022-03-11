'use strict';

const {DEBUG, NODE_ENV} = process.env;

const { JSDOM } = require('jsdom');

async function scraper(url) {
  if (DEBUG) console.log('I will scrape from', url);
  const res = await fetch(url);
  const html = await res.text();

  const { document } = (new JSDOM(html)).window;

  const allWards = document.querySelectorAll('a[title^="Ward"]');

  for (let ward of allWards) {
    const alderman = ward.parentElement
      .nextElementSibling
      .textContent.split('Alderman')[1];
    console.log(ward.title, alderman.trim());
  }
  console.log('I have found', allWards.length, 'wards!');
  // TODO: Parse the HTML
  // console.log(document.querySelector('title').innerHTML);
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
