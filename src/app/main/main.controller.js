(function () {
    'use strict';

    angular
        .module('gloria-main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['toastr'];

    /**
     * @ngInject
     * @ngDoc controller
     * @description Main Controller
     * @author Dennis Fricke
     */
    function MainCtrl(toastr) {
        var vm = this;
        vm.title = 'MainCtrl';

        activate();

        function activate() {
            toastr.info('Welcome');
        }
    }

})();