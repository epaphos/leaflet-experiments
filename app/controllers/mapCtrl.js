var app = angular.module('myApp');

app.controller("SimpleMapController", function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        },
        events: {
            map: {
                enable: ['zoomstart', 'drag', 'mousedown', 'mouseup'],
                logic: 'emit'
            }
        }
    });

    $scope.eventDetected = "No events yet...";

    $scope.$on('leafletDirectiveMap.mousedown', function(event) {
      $scope.eventDetected = "Mouse down";
    });

    $scope.$on('leafletDirectiveMap.mouseup', function(event) {
      $scope.eventDetected = "Mouse up";
    });


    $scope.$on('leafletDirectiveMap.drag', function(event){
        $scope.eventDetected = "Drag";
    });

    // $scope.$on('leafletDirectiveMap.click', function(event){
    //     $scope.eventDetected = "Click";
    // });
});
