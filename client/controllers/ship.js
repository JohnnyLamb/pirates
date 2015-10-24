app.controller('shipCtrl', function($scope, $rootScope, $http, $window) {

  $scope.username = JSON.parse(localStorage.getItem('currentUser')).username;
  $scope.id = JSON.parse(localStorage.getItem('currentUser'))._id;
  $scope.newEmail = $scope.email;
  $scope.addShip = function() {
    $scope.message = '';

    var payload = {
      'shipname': $scope.shipname,
      'username': $scope.username,
      'id':$scope.id
    };

    console.log(payload);
    $http.put('pirate/ship', payload).success(function(response, status) {
        if (status === 200 && response) {
          $scope.message = "Updated";
        } else {
          console.log("handle error here");
        }
      })
      .error(function(err) {
        console.log('handle error:', err);
      });
  };
});
