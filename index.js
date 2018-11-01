'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');


module.exports = {
  name: require('./package').name,
  normalizeEntityName: function () {
  },

  beforeInstall() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        // name is the addon name, and target (optional) is the version
        {name: 'ember-cli-sass'},
        {name: 'ember-moment'},
      ]
    });

  },
  afterInstall() {
    var importStatement = '\n@import "ember-element-ui";\n';
    var stylePath = path.join('app', 'styles');
    var file = path.join(stylePath, `app.scss`);

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }

    if (fs.existsSync(file)) {
      this.ui.writeLine(`Added import statement to ${file}`);
      this.insertIntoFile(file, importStatement, {});
    } else {
      fs.writeFileSync(file, importStatement);
      this.ui.writeLine(`Created ${file}`);
    }

    return this.addPackagesToProject([
      {name: 'element-theme-chalk', target: '^2.4.9'},
      {name: 'popper.js'},
      {name: 'pnotify'},
      {name: 'normalize.css'},
    ]);
  },

  included(app) {
    this._super.included.apply(this, arguments);
    this._ensureFindHost();

    var popperPath = path.join('node_modules', 'popper.js', 'dist', 'umd');
    var pnotifyPath = path.join('node_modules', 'pnotify', 'dist',);
    var pnotifyPathJS = path.join(pnotifyPath, 'umd');

    var host = this._findHost();

    host.import({
      development: path.join(popperPath, 'popper.js'),
      production: path.join(popperPath, 'popper.min.js'),
    });

    host.import({
      development: path.join(popperPath, 'popper-utils.js'),
      production: path.join(popperPath, 'popper-utils.min.js'),
    });


    host.import(path.join(pnotifyPathJS, 'PNotify.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyAnimate.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyButtons.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyCallbacks.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyCompat.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyConfirm.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyDesktop.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyHistory.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyMobile.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyNonBlock.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyReference.js'));
    host.import(path.join(pnotifyPathJS, 'PNotifyStyleMaterial.js'));

    host.import(path.join(pnotifyPath, 'PNotifyBrightTheme.css'));
    host.import(path.join('node_modules', 'normalize.css', 'normalize.css'));

  },


  treeForStyles: function (tree) {
    var styleTrees = [];
    var host = this._findHost();

    if (host.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel(path.join('node_modules', 'element-theme-chalk', 'src'), {
        destDir: 'ember-element-ui'
      }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, {overwrite: true});
  },


  _ensureFindHost() {
    if (!this._findHost) {
      this._findHost = function findHostShim() {
        var current = this;
        var app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        return app;
      };
    }
  }
};
