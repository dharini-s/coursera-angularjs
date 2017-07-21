/**
 * Created by dharini on 7/19/17.
 */
// IIFE - prevent from bleeding into global scope
// if declared without var keyword - global
(function()
{
    'use strict';
    // $scope shares data between view-model and view
    angular.module('myApp', [])
        .controller('MyFirstController', function ($scope)
        {
            $scope.name = "Dharini";
            $scope.helloFunction = function ()
            {
                return "Hello";
            };
        });
})();