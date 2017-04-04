'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$http","$scope",function($http,$scope) {
	console.log("============INSIDE VIEW1==============");
	//display first
  /*$http.get('/api/csd')
      .then(function(response){
        $scope.hits=response.data.hits.hit;
        console.log("First Display Got");
      })
      .catch(function(e){
        console.log("JSON ERROR == "+ e);
      });
*/
//search button click
  $scope.searchtext=function(){
    console.log($scope.formData);
    $http.post('/api/search',$scope.formData)
      .then(function(response){
        $scope.formData={};//clear the search textbox for new search
        $scope.hits=response.data.hits.hit;
        console.log(response.data.hits.hit[0].fields['caseid']);
      })
      .catch(function(e){
        console.log("JSON ERROR == "+ e);
      });
  }

}]);
