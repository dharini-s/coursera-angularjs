/**
 * Created by dharini on 7/20/17.
 */
(function()
{
    'use strict';
    angular.module('DIApp', [])
        .controller('DIController', DIController);
    // $scope, $filter(formatting data that gets displayed to user) are services
    function DIController($scope, $filter, $injector)
    {
        $scope.name = "Dharini";

        $scope.upperCase = function ()
        {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        console.log($injector.annotate(DIController));
    }

    function AnnotateMe(name, job, param)
    {
        return "Blah";
    }

    console.log(AnnotateMe.toString());
})();