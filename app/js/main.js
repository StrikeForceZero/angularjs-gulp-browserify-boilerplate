import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

import 'ng-cordova';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  'ngCordova'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
