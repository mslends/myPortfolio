angular.module("myPortfolio").directive('infoDirective', function() {
    return{
      templateUrl: '/views/info-template.html',
      restrict: 'E',
      scope: {
        profilePicture: '='
      },
      controller: 'mainCtrl'
    }
})
