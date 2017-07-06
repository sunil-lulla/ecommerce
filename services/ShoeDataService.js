shoeapp.factory("ShoeData",["$http", function ($http) {
	var factory = {};
	factory.get_shoe_all_data = function(){
			return $http({
	        method : "GET",
	        url : "https://api.myjson.com/bins/op6av"
	    }).then(function(response) {
	    	// console.log(response.data);
	        return response.data;
	    }, function (response) {
	        return response;
	    });
	}
	return factory;	
}]);