angular.module("myPortfolio").controller('mainCtrl', function($scope) {

$scope.profilePicture = 'images/profile-pic.jpg';
// $scope.contactProfile = 'http://assets.rollingstone.com/assets/2012/article/the-dirty-mind-and-lonely-heart-of-john-mayer-20120606/194222/large_rect/1430418889/1401x788-140650247.jpg'


$(document).ready(function(){
    $(".fa").hover(function(){
        $(this).removeClass('fa-2x').addClass('fa-3x')
      }, function(){
        $(this).removeClass('fa-3x').addClass('fa-2x');


      });
  });

  $('.carousel').carousel({
  interval: 5000,
  pause: 'hover'

})
})
