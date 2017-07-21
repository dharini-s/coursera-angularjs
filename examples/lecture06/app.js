/**
 * Created by dharini on 7/19/17.
 */

(function()
{
    'use strict';

    angular.module('NameCalculator', [])
    .controller('MyFirstController', function ($scope)
    {
        $scope.name = "default";
        $scope.totalValue = 0;
        $scope.displayNumeric = function()
        {
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string)
        {
            var strValue = 0;
            for (var i = 0; i < string.length; ++i)
            {
                strValue += string.charCodeAt(i);
            }
            return strValue;
        }
    });
})();