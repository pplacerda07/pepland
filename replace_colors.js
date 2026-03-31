import fs from 'fs';
import path from 'path';

const componentsDir = path.join(import.meta.dirname, 'src/components');

const replacements = {
  // background colors
  'bg-dark': 'bg-[#F8F9FA]', // light bg
  'bg-[#1A1A16]': 'bg-[#F8F9FA]',
  'bg-dark-light': 'bg-white',
  'bg-dark-card': 'bg-white',
  
  // text colors
  'text-cream': 'text-dark',
  'text-[#E3E4DE]': 'text-dark',
  
  // border colors
  'border-white/5': 'border-dark/5',
  'border-white/10': 'border-dark/10',
  'border-white/20': 'border-dark/20',
  'border-dark-light': 'border-sage-light'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  Object.entries(replacements).forEach(([search, replace]) => {
    // We want to replace exactly this class. We can use regex with word boundaries
    // But CSS classes usually have spaces or quotes around them.
    // Note: 'border-white/5' has a slash, which is not a word character.
    // We'll use split and join for exact substrings, as they are mostly Tailwind classes.
    newContent = newContent.split(search).join(replace);
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
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  });
}

processDir(componentsDir);
console.log('Done!');
