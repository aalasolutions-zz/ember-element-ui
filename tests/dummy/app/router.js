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
  this.route('progress');
  this.route('tags');
  this.route('badge');
  this.route('message');
  this.route('alert');
  this.route('card');
  this.route('message-box');
  this.route('input');
  this.route('radio');
  this.route('divider');
});

export default Router;
