(function () {
    'use strict';

    angular
        .module('app.example')
        .controller('Example', Example);

    /* @ngInject */
    function Example($state, logger) {
        var vm = this;
        vm.title = 'Example';

        activate();

        function activate() {
            logger.info('Activated Example');
        }
    }
})();
