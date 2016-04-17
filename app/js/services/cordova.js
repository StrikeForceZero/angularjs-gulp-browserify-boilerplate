// Based off:
// http://stackoverflow.com/a/21906525/1443717
// https://github.com/aderowbotham/angular-cordova-bootstrap/blob/master/www/js/services/fs-cordova.js
function CordovaService($document, $timeout, $window, $q) {
  'ngInject';

  const self = this;

  const defer = $q.defer();

  self.ready = defer.promise;

  // Backup in the case that we did not received the event
  // This seemed to be necessary with some versions of Cordova
  // when testing via 'cordova serve' in a web browser
  // but when on-device the event is received correctly
  let timeoutPromise = $timeout(() => {
    if ($window.cordova){
      defer.resolve($window.cordova);
    } else {
      defer.reject('Cordova failed to load');
    }
  }, 1200);

  angular.element($document)[0].addEventListener('deviceready', () => {
    $timeout.cancel(timeoutPromise);
    defer.resolve($window.cordova);
  });

  return self;

}

export default {
  name: 'CordovaService',
  fn: CordovaService
};