function convertHTML(str) {
str=str.replace(/&/g,'&amp;') // chaining method. There is switch case method also
  .replace(/</g,'&lt;')
  .replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;')
  .replace(/'/g,"&apos;");
return str;
  
}

// convertHTML("abc<> &");
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.