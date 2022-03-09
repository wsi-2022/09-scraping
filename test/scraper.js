const assert = require('assert');
const scraper = require('../lib/scraper');

describe('The scraper library', function() {
  it('should return the fifty Chicago wards', async function() {
    const wardCount = await scraper.scraper('http://127.0.0.1:8080/');
    assert.equal(wardCount, 50);
  });
});
