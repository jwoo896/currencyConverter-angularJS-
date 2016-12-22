angular.module('converter',[])
.controller('converterCtrl', ['$scope', '$http', function($scope,$http){
	var selectCtrl = this;
	$scope.rates = {};
	$http.get('http://api.fixer.io/latest?base=ZAR')
	.then(function(res){
		$scope.rates = res.data.rates;
		$scope.toType = $scope.rates.EUR;
		$scope.fromType = $scope.rates.USD;
		$scope.fromValue = 1;
		$scope.convertFunction();
	});
	$scope.convertFunction = function(){
		$scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
		$scope.toValue = $scope.toValue;
	};
}]);

