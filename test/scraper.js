const assert = require('assert/strict');
const { scraper } = require('../lib/scraper');

const url = 'http://127.0.0.1:8080/';

describe('The scraper library', function() {
  it('should return fifty wards', async function() {
    const wardCount = await scraper(url);
    assert.equal(wardCount, 50);
  });
});
