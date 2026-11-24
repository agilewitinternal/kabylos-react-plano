import {createServer} from 'vite';
import {readFile,writeFile} from 'node:fs/promises';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try {
 const {default:App}=await server.ssrLoadModule('/src/App.jsx');
 const {default:React}=await import('react');
 const {renderToString}=await import('react-dom/server');
 const html=await readFile('dist/index.html','utf8');
 await writeFile('dist/index.html',html.replace('<div id="root"></div>',()=>`<div id="root">${renderToString(React.createElement(App))}</div>`));
} finally {await server.close();}
