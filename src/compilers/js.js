const Cacher = require('./cacher');
const sucrase = require('sucrase');

class JS extends Cacher {
   compile(mdl, filename, content) {
      const { code } = sucrase.transform(content, {
         transforms: ['flow', 'imports'],
         filePath: filename
      });

      return code;
   }

   get shouldInternallyCompile() {
      return true;
   }
};

module.exports = new JS();