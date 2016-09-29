angular.module('starter.controllers', [])


  .controller('mainController',function($scope,$http){
    $scope.init=function () {


      $scope.contents = null;
      var tags=$scope.search;
      $http.get('https://kgsearch.googleapis.com/v1/entities:search?query='+encodeURIComponent(tags)+'&key=AIzaSyDsXkEfKo5KxCruUXsfV0XACCRAOMKJ8kI&limit=1&indent=True')
        .success(function (data) {
          //  $scope.contents = data;
          $scope.contents="Undefined Fantastic Object is the twelfth main game of the Touhou Project scrolling shooter series. Made by the dōjin game maker Team Shanghai Alice, the full version of the game was released in the 76th Comiket on August 15, 2009, followed by the retail release on September 11, 2009.";
          var msg = new SpeechSynthesisUtterance("Undefined Fantastic Object is the twelfth main game of the Touhou Project scrolling shooter series. Made by the dōjin game maker Team Shanghai Alice, the full version of the game was released in the 76th Comiket on August 15, 2009, followed by the retail release on September 11, 2009.");
          window.speechSynthesis.speak(msg);
          for(var i = 1; i < 5; i++) {
            var txt = $('#itemListElement').val($scope.data[i].itemListElement);
            var msg = new SpeechSynthesisUtterance("hello");
            window.speechSynthesis.speak(msg);
          }

        })
        .error(function (data, status, error, config) {
          $scope.contents = [{heading: "Error", description: "Could not load json   data"}];
          var msg = new SpeechSynthesisUtterance("wrong description");
          window.speechSynthesis.speak(msg);
        });
    }
    //$scope.contents = [{heading:"Content heading", description:"The actual content"}];
    //Just a placeholder. All web content will be in this format
    $scope.init2=function ()
    {
      window.speechSynthesis.cancel();
      window.location.reload();
    }
  })


  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('test5');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }
  });
