(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=function(app){
app.controller("GameController",["$scope","GameService", function($scope,GameService){
  console.log("hey we are here at the game controller");
  $scope.questions = GameService.getCatagories();
  $scope.myValue = function(vis) {
    if(vis) {
      return invis
    } else {
      return vis
    }
  }
  // $scope.values = ValueService.getValues();
}])
}

},{}],2:[function(require,module,exports){
module.exports=function(app){
app.controller("GameoverController",["$scope","GameService",function($scope,GameService){
  console.log("hey we are here at the game controller");
  $scope.questions = GameService.getClues();
}])
}

},{}],3:[function(require,module,exports){
module.exports=function(app){
app.factory("GameService", ["$http",function($http){
let addedCatagories = [];
let addedValues = [];


return {

  getCatagories: function(){
    console.log("getting some questions")
    $http({
         method: "GET",
         url:"http://jservice.io/api/random?count=4&offset=2",
    }).then(function success(response){
      console.log(response.data);
      angular.copy(response.data,addedCatagories);
    });
    return addedCatagories;
  },

  getValues: function(){
    console.log("getting some questions")
    $http({
         method: "GET",
         url:"http://jservice.io/api/random",
    }).then(function success(response){
      console.log(response.data);
      console.log("getting random data")
      angular.copy(response.data,addedValues);
    });
    return addedValues;
  },
  // attendingEvents: function (target){
  //   console.log("consider it done")
  //   $http({
  //     method:"POST",
  //     url:"http://jservice.io/api/categories?count=10&offset=2" + target.id
  //   }).then(function success(response){
  //     console.log(response.data);
  //     angular.copy(response.data,attended);
  //   });
  //   return attended;
  // },
}







}]);
};

},{}],4:[function(require,module,exports){
let app = angular.module ("QuestionApp", ["ngRoute"])
app.config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "templates/game.html",
    controller: "GameController"
  })
  $routeProvider.when("/Gameover", {
    templateUrl:"templates/gameover.html",
    controller: "GameoverController"
  })
  // $routeProvider.when("/", {
    // redirectTo: "/"
  // })
}])

require("./controllers/GameController")(app);
require("./controllers/services/game")(app);
require("./controllers/GameoverController")(app)

function myFunction() {
    document.getElementById("valueBox").innerHTML = Math.random();
}

},{"./controllers/GameController":1,"./controllers/GameoverController":2,"./controllers/services/game":3}]},{},[4])