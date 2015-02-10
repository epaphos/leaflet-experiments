var app = angular.module('myApp');

app.directive('map', function () {
  // angular.extend($scope, {
  //     defaults: {
  //         scrollWheelZoom: false
  //     },
  //     events: {
  //         map: {
  //             enable: ['zoomstart', 'drag', 'mousedown', 'mouseup'],
  //             logic: 'emit'
  //         }
  //     }
  //   });
  return {
        restrict:'E',
        scope: {
            reports: '=',
            position: '='
        },
        template:'<leaflet height="300px">' +
                '</leaflet>',

        }
});
