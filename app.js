(function() {
 var module = angular.module("LunchCheck", []);
 module.controller("LunchCheckController" , LunchCheckController);
 LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope)
 {

   $scope.message = function()
   {

     if(!$scope.items)
     {

     $scope.MenuItems = "Please enter data first";
   }
   else {
     {
      $scope.getItems= $scope.items.split(',');
      if($scope.getItems.length <= 3)
      {
        $scope.MenuItems = "Enjoy!";
      }
      else
      {
          $scope.MenuItems = "Too much!";
      }
      }

     }
   }
   }

})();
