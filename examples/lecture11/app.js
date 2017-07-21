/**
 * Created by dharini on 7/21/17.
 */
// Interpolation - process of evaluating string literal containing one or more
// placeholders which are replaced with values
(function()
{
    'use strict';
    angular.module('MsgApp', [])
        // Last element is controller function
        .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope'];
    function MsgController($scope)
    {
        $scope.name = 'Dharini';
        $scope.state = 'kirk';

        $scope.sayMessage = function()
        {
            return 'called sayMessage()';
        };
        $scope.flipImage = function()
        {
            $scope.state = 'spock';
        };
    }

})();