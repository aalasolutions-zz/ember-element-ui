'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    minifyCSS: {
      options: { processImport: true }
    },
    sassOptions: {
      includePaths: [
        // 'node_modules/element-theme-chalk/src/',
        // 'node_modules/element-theme-chalk/lib/',
        'node_modules/ember-table/addon/styles/',
      ]
    }
  });

  // app.import('node_modules/element-theme-chalk/lib/index.css');
  app.import('node_modules/animate.css/animate.css');
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
