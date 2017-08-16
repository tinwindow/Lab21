angular.module("quoteApp", [])
.controller("quoteController", function($scope, $http) {
    // Request the /taco endpoint (see server.js) and put the taco object on the scope.
    $http.get("/api/random-quote").then(function(response) { //getting response from /taco
        console.log(response.data);
        $scope.quote = response.data;
    })
});

/*angular.module("quotesApp", [])
.controller("quotesController", function($scope, $http) {
    // Request the /taco endpoint (see server.js) and put the taco object on the scope.
    $http.get("/api/quotes").then(function(response) { //getting response from /taco
        console.log(response.data);
        $scope.quotes = response.data;
    })
});*/
