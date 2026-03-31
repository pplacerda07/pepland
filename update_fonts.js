import fs from 'fs';
import path from 'path';

const componentsDir = path.join(import.meta.dirname, 'src/components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // 1. Títulos grandes (text-3xl, 4xl, 5xl, 6xl) com font-bold -> font-extrabold
  newContent = newContent.replace(/text-(3xl|4xl|5xl|6xl)(\s+[^"']*?)font-bold/g, 'text-$1$2font-extrabold');
  newContent = newContent.replace(/font-bold(\s+[^"']*?)text-(3xl|4xl|5xl|6xl)/g, 'font-extrabold$1text-$2');

  // 2. Subtítulos (text-xl, text-2xl, text-lg) com font-bold -> font-semibold
  newContent = newContent.replace(/text-(lg|xl|2xl)(\s+[^"']*?)font-bold/g, 'text-$1$2font-semibold');
  newContent = newContent.replace(/font-bold(\s+[^"']*?)text-(lg|xl|2xl)/g, 'font-semibold$1text-$2');

  // 3. Informações complementares (text-sm, text-xs) -> adicionar font-medium
  // This will find text-sm optionally followed by other tailwind classes
  newContent = newContent.replace(/text-sm([^"']*?)"/g, (match, classes) => {
    // only add font-medium if it doesn't already specify a font- weight
    if (!classes.includes('font-')) {
      return `text-sm font-medium${classes}"`;
    }
    return match;
  });

  newContent = newContent.replace(/text-xs([^"']*?)"/g, (match, classes) => {
    if (!classes.includes('font-')) {
      return `text-xs font-medium${classes}"`;
    }
    return match;
  });

  // Highlight classes text-gold without font-weight -> add font-bold
  newContent = newContent.replace(/text-gold([^"']*?)"/g, (match, classes) => {
    if (!classes.includes('font-')) {
      return `text-gold font-bold${classes}"`;
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  });
}

processDir(componentsDir);
console.log('Fonts updated successfully!');
