app.controller("homeCtrl",['$scope','$http', function($scope,$http){
    $scope.homeFunc = function(){
        alert("this is homepage");
        $http({
            method:'GET',
            url:'/api/allseries'
        }).then(function mySuccess(response) {
            console.log(response);
        },function myError(response){
            console.log(response);
        });
    }
}]);