angular.module('myPortfolio').directive('footerDirective', function() {
  return {
    templateUrl: '/views/footer-template.html',
    restrict:     'E',
    controller: 'mainCtrl'
  }
})
