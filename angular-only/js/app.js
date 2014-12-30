'use strict';

var app = angular.module('ColorWars', []);

app.controller('Main', function($scope) {

  // The ID's of the squares
  $scope.bitIds = ['a0','a1','a2','a3','b0','b1','b2','b3','c0','c1','c2','c3','d0','d1','d2','d3'];
  // The color value for each square, by it's ID
  $scope.bitMap = {'a0':'White','a1':'White','a2':'White','a3':'White','b0':'White','b1':'White','b2':'White','b3':'White','c0':'White','c1':'White','c2':'White','c3':'White','d0':'White','d1':'White','d2':'White','d3':'White'};

  $scope.calcBitStyle = function(bitId) {
    var styles = {};
    if ($scope.bitMap[bitId] != null) {
      styles['background-color'] = $scope.bitMap[bitId];
    }
    return styles;
  }

  $scope.onClickBit = function(bitId) {
    if ($scope.bitMap[bitId] === 'White') {
      $scope.bitMap[bitId] = 'Yellow';
    } else {
      $scope.bitMap[bitId] = 'White'
    }
  }

  $scope.score = function() {
    var white = 0;
    var yellow = 0
    for (var key in $scope.bitMap) {
      if ($scope.bitMap.hasOwnProperty(key)) {
        if ($scope.bitMap[key] === "White") {
          white++;
        } else if ($scope.bitMap[key] === "Yellow") {
          yellow++;
        }
      }
    }
    return {"White": white, "Yellow": yellow};
  }

});
