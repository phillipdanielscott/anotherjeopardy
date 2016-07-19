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
