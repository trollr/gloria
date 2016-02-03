(function () {
    'use strict';

    angular
        .module('gloria-contribution')
        .directive('gloriaContribution', gloriaContribution);

    gloriaContribution.$inject = [];

    /**
     * @ngInject
     * @ngDoc directive
     * @description contribution
     * @author Dennis Fricke
     */
    function gloriaContribution() {
        var directive = {
            bindToController: true,
            controller: ContributionCtrl,
            controllerAs: 'vm',
            templateUrl: 'app/components/contribution/contribution.html',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    ContributionCtrl.$inject = [];

    /**
     * @ngInject
     * @ngDoc controller
     * @description contribution controller
     * @author Dennis Fricke
     */
    function ContributionCtrl() {

    }

})();

