angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'home.html',
        controller:'homecntrl'}).when('/home/:first/:last',
        {
            templateUrl:'home.html',
            controller:'homecntrl'
        }).when('/about',
        {
            templateUrl:'about.html',
            controller:'aboutcntrl'
        }).when('/flight',
        {
            templateUrl:'flight.html',
            controller:'flightcntrl'
        })
})
.controller('mycntrl',function()
{

})
.controller("homecntrl",function($scope,$routeParams)
{
    $scope.message="Hey There"
    if($routeParams.first&&$routeParams.last){
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }

})
.controller("aboutcntrl",function($scope)
{
    $scope.about=["This is the about page for the flight website.The owner of the company is Rohit Priyadarshi"];
})
.controller("flightcntrl",function($scope,$http)
{
    $http.get('flights.json')
    .success(function(response)
    {
        $scope.r_ctrl=response.roaster;
    });
});
