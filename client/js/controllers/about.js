app.controller('aboutCtrl',['$scope','$http', function($scope,$http){
            $scope.abtFunc = function(){
                alert("this is about page");
                $http({
                    method:'GET',
                    url:'/api/allparallel'
                }).then(function mySuccess(response) {
                    console.log(response);
                },
                    function myError(response){
                    console.log(response);
                });
            }
}]);