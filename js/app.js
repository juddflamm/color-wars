'use strict';

var app = angular.module('ColorWars', ['firebase']);

app.controller('Main', function($scope, $firebase) {

  $scope.bitIdsSource = ['a0','a1','a2','a3','b0','b1','b2','b3','c0','c1','c2','c3','d0','d1','d2','d3'];
  $scope.bitIds = [];

  var firebaseRef = new Firebase("https://colorwars.firebaseio.com/");
  $firebase(firebaseRef).$bind($scope, "bitMap").then(function(){
    //This puts the list of square bitIds in the right variable for the ng-repeat, but not until after the data is retrieved
    $scope.bitIds = $scope.bitIdsSource;
  });

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
