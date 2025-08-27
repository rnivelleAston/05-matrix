const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const sourceFile = path.join(__dirname, '..', 'src', 'index.js');
const content = fs.readFileSync(sourceFile, 'utf8');

const buildInfo = `
// Built on: ${new Date().toISOString()}
// Node version: ${process.version}
// Platform: ${process.platform}

${content}
`;

const outputFile = path.join(distDir, 'bundle.js');
fs.writeFileSync(outputFile, buildInfo);

console.log(`Build completed! Output: ${outputFile}`);
console.log(`Platform: ${process.platform}`);
console.log(`Node version: ${process.version}`);