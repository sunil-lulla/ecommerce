shoeapp.controller('shoeMartCtrl', function($scope, ShoeData) {
    // $scope.firstName = "John";
    console.log(ShoeData.get_shoe_all_data());
    ShoeData.get_shoe_all_data().then(function(resp){
    	$scope.shoes_data = resp;
    });
});