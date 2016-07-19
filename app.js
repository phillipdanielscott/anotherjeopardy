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
