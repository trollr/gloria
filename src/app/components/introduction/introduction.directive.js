(function () {
    'use strict';

    angular
        .module('gloria-introduction')
        .directive('gloriaIntroduction', gloriaIntroduction);

    gloriaIntroduction.$inject = [];

    /**
     * @ngInject
     * @ngDoc directive
     * @description introduction
     * @author Dennis Fricke
     */
    function gloriaIntroduction() {
        var directive = {
            bindToController: true,
            controller: IntroductionCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/introduction/introduction.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    IntroductionCtrl.$inject = [];

    /**
     * @ngInject
     * @ngDoc controller
     * @description introduction controller
     * @author Dennis Fricke
     */
    function IntroductionCtrl() {

    }

})();
