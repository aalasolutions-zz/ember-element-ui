import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('buttons');
  this.route('layouts');
  this.route('installation');
  this.route('layout-container');
  this.route('icons');
});

export default Router;
