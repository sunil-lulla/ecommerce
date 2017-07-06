shoeapp.factory("ShoeData",["$http", function ($http) {
	get_shoe_all_data = function(){
			$http({
	        method : "GET",
	        url : "welcome.htm"
	    }).then(function mySuccess(response) {
	        return response;
	    }, function myError(response) {
	        return response;
	    });
	}	
}]);