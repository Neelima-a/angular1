app.controller("mycontroller",['$scope', function($scope){
					$scope.names=["Banglore",
					"Chennai",
					"karnataka"
					];
					$scope.count=0;
				$scope.myName= function(){
						$scope.count++;
				};
}]);
app.controller('myCtrl',['$scope',function($scope){
					$scope.price=53;
				}]);
app.controller('sizeCtrl',['$scope',function($scope){
					$scope.txt="Hello Welcome to Angular";
				}]);

