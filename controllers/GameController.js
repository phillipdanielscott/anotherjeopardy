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
