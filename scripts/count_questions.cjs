const fs = require('fs');
const path = require('path');

const catalogFiles = [
  'primary.ts',
  'highMath.ts',
  'highAdvanced.ts',
  'highFun.ts',
  'universityCollege.ts',
  'universityAcademic.ts',
  'universityPrep.ts',
  'career.ts',
  'openstax.ts',
  'fcc.ts',
  'wikibooks.ts'
];

const catalogDir = path.join(__dirname, '../src/data/questionCatalog');

const results = {};

catalogFiles.forEach(file => {
  const filePath = path.join(catalogDir, file);
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for track keys and count 'id:' within their blocks
  // This is a rough heuristic but should work for our structured files
  const trackRegex = /'([a-zA-Z_0-9-]+)':\s*makeQuestionBank\('([a-zA-Z ]+)',\s*\[/g;
  let match;
  
  while ((match = trackRegex.exec(content)) !== null) {
    const trackId = match[1];
    const startIdx = match.index;
    
    // Find the end of the array
    let openBrackets = 1;
    let endIdx = -1;
    for (let i = startIdx + match[0].length; i < content.length; i++) {
      if (content[i] === '[') openBrackets++;
      else if (content[i] === ']') openBrackets--;
      
      if (openBrackets === 0) {
        endIdx = i;
        break;
      }
    }
    
    if (endIdx !== -1) {
      const block = content.substring(startIdx, endIdx);
      const idMatches = block.match(/id:\s*[0-9]+/g);
      results[trackId] = idMatches ? idMatches.length : 0;
    }
  }
});

// Also check simple assignments like apCalculus: [ ... ]
const simpleTrackRegex = /([a-zA-Z_0-9-]+):\s*\[/g;
catalogFiles.forEach(file => {
  const filePath = path.join(catalogDir, file);
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  
  while ((match = simpleTrackRegex.exec(content)) !== null) {
    const trackId = match[1];
    if (results[trackId]) continue; // Already found
    
    const startIdx = match.index;
    let openBrackets = 1;
    let endIdx = -1;
    for (let i = startIdx + match[0].length; i < content.length; i++) {
      if (content[i] === '[') openBrackets++;
      else if (content[i] === ']') openBrackets--;
      
      if (openBrackets === 0) {
        endIdx = i;
        break;
      }
    }
    
    if (endIdx !== -1) {
      const block = content.substring(startIdx, endIdx);
      const idMatches = block.match(/id:\s*[0-9]+/g);
      results[trackId] = idMatches ? idMatches.length : 0;
    }
  }
});

console.log(JSON.stringify(results, null, 2));
