const assert = require('assert/strict');
const { scraper, selectWards } = require('../lib/scraper');
const { JSDOM } = require('jsdom');

const url = 'http://127.0.0.1:8080/';

const mockHTML = `<h4><a title="Ward 1" href="/city/en/about/wards/01.html">&nbsp; Ward 1</a>&nbsp;&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman Daniel La Spata</p>
<h4><a title="Ward 2" href="/city/en/about/wards/02.html">&nbsp; Ward 2</a>&nbsp;&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman&nbsp;Brian Hopkins</p>
<h4><a title="Ward 3" href="/city/en/about/wards/03.html">&nbsp; Ward 3&nbsp;</a>&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman Pat Dowell</p>
<h4><a title="Ward 4" href="/city/en/about/wards/04.html">&nbsp; Ward 4</a>&nbsp;&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman Sophia King</p>`;

describe('The scraper library', function() {
  it('should return fifty wards', async function() {
    const wardCount = await scraper(url);
    assert.equal(wardCount, 50);
  });
  it('should find a specific number of wards', function() {
    const { document } = (new JSDOM(mockHTML)).window;
    const wardCount = selectWards(document);
    assert.equal(wardCount.length, 4);
  })
});
