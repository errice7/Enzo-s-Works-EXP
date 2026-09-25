import {readFile,cp,mkdir,rm} from 'node:fs/promises';
await readFile('public/index.html');await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});console.log('Static build ready: dist');
