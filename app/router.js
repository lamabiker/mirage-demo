import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  
  this.route('devs', { path: 'devs' }, function() {
    this.route('index', { path: '/' });
    this.route('dev', { path: ':dev_id' });
  });
});

export default Router;
