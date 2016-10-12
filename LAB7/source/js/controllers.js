angular.module('starter.controllers', [])


  .controller('mainController',function($scope,$http){
    //$scope.data = {};
    $scope.init=function () {


        $scope.contents = null;
      var r =$scope.search;
      $http.get('https://kgsearch.googleapis.com/v1/entities:search?query='+encodeURIComponent(r)+'&key=AIzaSyDsXkEfKo5KxCruUXsfV0XACCRAOMKJ8kI&limit=1&indent=True')
        .success(function (data) {


            //$scope.contents = data;



          $scope.contents="Kansas City is the largest city in the U.S. state of Missouri and the sixth largest city in the Midwest. According to the U.S. Census Bureau, the city had an estimated population of 475,378 in 2015, making it the 36th largest city by population in the United States. It is the anchor city of the Kansas City metropolitan area, which straddles the Kansas–Missouri border. Kansas City was founded in the 1830s as a Missouri River port at its confluence with the Kansas River coming in from the west. On June 1, 1850 the town of Kansas was incorporated; shortly after came the establishment of the Kansas Territory. ";
          var msg = new SpeechSynthesisUtterance("Kansas City is the largest city in the U.S. state of Missouri and the sixth largest city in the Midwest. According to the U.S. Census Bureau, the city had an estimated population of 475,378 in 2015, making it the 36th largest city by population in the United States. It is the anchor city of the Kansas City metropolitan area, which straddles the Kansas–Missouri border. Kansas City was founded in the 1830s as a Missouri River port at its confluence with the Kansas River coming in from the west. On June 1, 1850 the town of Kansas was incorporated; shortly after came the establishment of the Kansas Territory.");
          window.speechSynthesis.speak(msg);

         /* for(var i = 1; i < 5; i++) {
            var txt = $('#itemListElement').val($scope.data[i].itemListElement);
            var msg = new SpeechSynthesisUtterance("hello");
            window.speechSynthesis.speak(msg);
          }*/

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
  .controller('myCtrl', function($scope, $cordovaGeolocation){

    $scope.toggle = function(){

      var posOption = {timeout: 10000,enableHighAccuracy: true};
      $cordovaGeolocation
        .getCurrentPosition(posOption)
        .then(function (position)  {

            $scope.lat = position.coords.latitude;
            $scope.long = position.coords.longitude;


          }, function(err){
            //error
          }

        );

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
