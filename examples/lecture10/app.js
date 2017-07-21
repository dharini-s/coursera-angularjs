/**
 * Created by dharini on 7/20/17.
 */
(function()
{
    'use strict';
    angular.module('DIApp', [])
        // Last element is controller function
        .controller('DIController', DIController);
    DIController.$inject = ['$scope', '$filter'];
    function DIController($scope, $filter)
    {
        $scope.name = 'Dharini';

        $scope.upperCase = function ()
        {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }

})();