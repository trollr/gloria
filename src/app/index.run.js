(function() {
  'use strict';

  angular
    .module('gloria')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
