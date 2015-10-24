app.controller('profileCtrl', function($scope, $rootScope, $http, $window) {

  $scope.username = JSON.parse(localStorage.getItem('currentUser')).username;
  $scope.newEmail = $scope.email;
  $scope.edit = function() {
    $scope.message='';


    var payload = {
      'email': $scope.email,
      'username':$scope.username,
      '_id': JSON.parse(localStorage.getItem('currentUser'))._id
    };
    if ($scope.password) {
      payload.password = $scope.password;
    }

    $http.put('auth/edit', payload).success(function(response, status) {
        if (status === 200 && response) {
          delete $window.localStorage.currentUser;
          $window.localStorage.currentUser = JSON.stringify(response);
          $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          $scope.email = JSON.parse(localStorage.getItem('currentUser')).email;
          $scope.message = "Updated";
          $scope.password = '';
        } else {
          console.log("handle error here");
        }
      })
      .error(function(err) {
        console.log('handle error:', err);
      });
  };
});
