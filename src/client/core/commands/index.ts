import { readdirSync } from 'fs';
import { basename } from 'path';

const out = [];

readdirSync(__dirname).filter(f => f !== basename(__filename)).map(file => {
   const items = file.split('.');
   if (items.length != 1) items.splice(items.length - 1, 1);

   const payload = require(`${__dirname}/${file}`);
   out.push(payload.default);
});

export default out;
