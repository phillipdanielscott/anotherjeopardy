module.exports=function(app){
app.controller("GameoverController",["$scope","GameService",function($scope,GameService){
  console.log("hey we are here at the game controller");
  $scope.questions = GameService.getClues();
}])
}
