const assert = require('assert');
const scraper = require('../lib/scraper');
const { JSDOM } = require('jsdom');

describe('The experimental fetch object', function() {
  it('should exist, given the --experimental-fetch flag', function() {
    assert.equal(typeof fetch, 'function');
  });
});

describe('The scraper library', function() {
  it('should return the fifty Chicago wards', async function() {
    const wardCount = await scraper.scraper('http://127.0.0.1:8080/');
    assert.equal(wardCount, 50);
  });
});

describe('The selectAllWardsFromDocument function', function() {
  let local;

  before(function() {
    html = `<h3><strong>Wards</strong></h3>
<h4><a title="Ward 1" href="/city/en/about/wards/01.html">&nbsp; Ward 1</a>&nbsp;&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman Daniel La Spata</p>
<h4><a title="Ward 2" href="/city/en/about/wards/02.html">&nbsp; Ward 2</a>&nbsp;&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman&nbsp;Brian Hopkins</p>
<h4><a title="Ward 3" href="/city/en/about/wards/03.html">&nbsp; Ward 3&nbsp;</a>&nbsp; &nbsp;</h4>
<p>&nbsp; Served by Alderman Pat Dowell</p>`;
    local = (new JSDOM(html)).window;
  });

  it('should exist', function() {
    assert.equal(typeof scraper.selectAllWardsFromDocument, 'function');
  });

  it('should return an expected number of wards', function() {
    const wards = scraper.selectAllWardsFromDocument(local.document);
    assert.equal(wards.length, 3);
  });

});
