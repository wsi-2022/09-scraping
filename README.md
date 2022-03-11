## DOM scraping notes

```javascript
const singleWard = document.querySelector('a[title="Ward 1"]');

const allWards = document.querySelectorAll('a[title^="Ward"]');

const alderman = document.querySelector('a[title="Ward 1"]')
                  .parentElement
                  .nextElementSibling
                  .innerText;
alderman.split('Aldermaan'); // -> " Some Name", "&nbsp;Some Name"
```
