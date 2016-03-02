angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $ionicPopup) {

  $scope.textRequest = function() {
    ApiAIPlugin.requestText({
        query: "hello"
      },
      function (response) {
        alert(JSON.stringify(response));
      },
      function (error) {
        alert("Error!\n" + error);
      });
  };

  $scope.voiceRequest = function() {
    ApiAIPlugin.requestVoice({ },
      function (response) {
        alert(JSON.stringify(response));
      },
      function (error) {
        alert("Error!\n" + error);
      });
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
