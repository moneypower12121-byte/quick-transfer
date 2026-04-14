import fs from 'fs';
import path from 'path';

const dirs = ['components', 'context'];
for (const dir of dirs) {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) continue;
  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
    const filePath = path.join(fullPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the broken use client without quotes
    if (content.startsWith('use client\r\n')) {
      content = content.replace('use client\r\n', '');
    } else if (content.startsWith('use client\n')) {
      content = content.replace('use client\n', '');
    }
    
    // Only add "use client" if it has hooks
    if (content.includes('useState') || content.includes('useEffect') || content.includes('useContext') || content.includes('useRef') || content.includes('useCallback') || content.includes('createContext')) {
      if (!content.includes('"use client";') && !content.includes("'use client';")) {
        content = '"use client";\n' + content;
      }
    }
    
    fs.writeFileSync(filePath, content);
  }
}
