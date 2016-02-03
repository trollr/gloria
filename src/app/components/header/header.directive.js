(function () {
    'use strict';

    angular
        .module('gloria-header')
        .directive('gloriaHeader', gloriaHeader);

    gloriaHeader.$inject = [];

    /**
     * @ngInject
     * @ngDoc directive
     * @description header
     * @author Dennis Fricke
     */
    function gloriaHeader() {
        var directive = {
            bindToController: true,
            controller: HeaderCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/header/header.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    HeaderCtrl.$inject = [];

    /**
     * @ngInject
     * @ngDoc controller
     * @description header controller
     * @author Dennis Fricke
     */
    function HeaderCtrl() {

    }

})();
