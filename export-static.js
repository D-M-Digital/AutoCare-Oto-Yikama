import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, 'dist');
const staticPath = join(__dirname, 'static-html');

if (!existsSync(staticPath)) {
  mkdirSync(staticPath, { recursive: true });
}

const indexHtml = readFileSync(join(distPath, 'index.html'), 'utf-8');

const pages = [
  { path: '/', file: 'index.html', title: 'AutoCare Oto Yıkama - Ana Sayfa' },
  { path: '/hizmetler', file: 'hizmetler.html', title: 'Hizmet Paketlerimiz - AutoCare' },
  { path: '/iletisim', file: 'iletisim.html', title: 'İletişim - AutoCare' },
  { path: '/404', file: '404.html', title: 'Sayfa Bulunamadı - AutoCare' },
];

pages.forEach(({ path, file, title }) => {
  let html = indexHtml.replace('<title>AutoCare</title>', `<title>${title}</title>`);
  
  html = html.replace(/\/assets\//g, './assets/');
  
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div>
    <script>
      window.__INITIAL_ROUTE__ = '${path}';
    </script>`
  );
  
  writeFileSync(join(staticPath, file), html);
});

if (existsSync(join(distPath, 'assets'))) {
  const assetsPath = join(staticPath, 'assets');
  if (!existsSync(assetsPath)) {
    mkdirSync(assetsPath, { recursive: true });
  }
  
  const { readdirSync, statSync } = await import('fs');
  const { copyFileSync } = await import('fs');
  
  function copyRecursive(src, dest) {
    const entries = readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);
      
      if (entry.isDirectory()) {
        if (!existsSync(destPath)) {
          mkdirSync(destPath, { recursive: true });
        }
        copyRecursive(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyRecursive(join(distPath, 'assets'), assetsPath);
}

const otherFiles = ['favicon.ico', 'robots.txt', 'placeholder.svg'];
otherFiles.forEach(file => {
  const src = join(distPath, file);
  if (existsSync(src)) {
    copyFileSync(src, join(staticPath, file));
  }
});

console.log('✅ Static HTML files exported to:', staticPath);
console.log('📄 Pages created:');
pages.forEach(({ file, title }) => {
  console.log(`   - ${file} (${title})`);
});
