/**
 * Created by dharini on 7/19/17.
 */
// IFFE - prevent from bleeding into global scope
// if declared without var keyword - global
(function()
{
    'use strict';
    // Module function returns module instance
    // Chain next call to controller - way to define VM(aka name of controller)
    angular.module('myFirstApp', [])
        .controller('MyFirstController', function()
        {

        })
})();