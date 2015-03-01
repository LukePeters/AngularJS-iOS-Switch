angular.module('postControllers', []);

angular.module('postControllers').controller('postCtrl', ['$scope', function($scope) {

	$scope.post = {
		published: true
	};

}]);