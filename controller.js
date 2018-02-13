var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$location,$timeout,$interval,$http){
    $scope.firstName = "Ahmed";
    $scope.lastName = "Sharief";
    $scope.url = $location.absUrl();
    $scope.dragons = [{name:'Fluffykins',type:'Fire'},{name:'Bootstrap',type:'Water'},{name:'Comodo',type:'Lightening'}];
    $scope.header = "myWorld";
   $http.get("https://www.w3schools.com/angular/customers.php.")
   .then(function(response){
    $scope.httdata = response.data.records;
    $scope.statusCode = response.status;});

    
    // $http({
    //     method : "GET",
    //     url : " https://www.w3schools.com/angular/customers.php."
    //   }).then(function mySuccess(response) {
    //       $scope.httdata = response.data;
    //     }, function myError(response) {
    //       $scope.httdata = response.statusText;
    //   });
    $timeout(function(){
        $scope.header = "yeah my World !!";
    },3000);
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    },1000);
});
