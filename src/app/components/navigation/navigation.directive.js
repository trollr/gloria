(function () {
    'use strict';

    angular
        .module('gloria-navigation')
        .directive('gloriaNavigation', gloriaNavigation);

    gloriaNavigation.$inject = [];

    /**
     * @ngInject
     * @ngDoc directive
     * @description navigation
     * @author Dennis Fricke
     */
    function gloriaNavigation() {
        var directive = {
            bindToController: true,
            controller: NavigationCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/navigation/navigation.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    NavigationCtrl.$inject = [];

    /**
     * @ngInject
     * @ngDoc controller
     * @description navigation controller
     * @author Dennis Fricke
     */
    function NavigationCtrl() {

    }

})();
