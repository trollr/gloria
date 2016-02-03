(function () {
    'use strict';

    angular
        .module('gloria-footer')
        .directive('gloriaFooter', gloriaFooter);

    gloriaFooter.$inject = [];

    /**
     * @ngInject
     * @ngDoc directive
     * @description footer
     * @author Dennis Fricke
     */
    function gloriaFooter() {
        var directive = {
            bindToController: true,
            controller: FooterCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/footer/footer.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    FooterCtrl.$inject = [];

    /**
     * @ngInject
     * @ngDoc controller
     * @description footer controller
     * @author Dennis Fricke
     */
    function FooterCtrl() {

    }

})();