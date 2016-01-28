(function() {
    'use strict';

    angular
        .module('app.example')
        .controller('ExampleDetail', ExampleDetail);

    /* @ngInject */
    function ExampleDetail($stateParams, dataservice, logger) {
        var vm = this;
        vm.example = undefined;
        vm.title = 'Example Detail';

        activate();

        function activate() {
            return getExample($stateParams.title).then(function() {
                logger.info('Loaded details for example \"' + vm.example.title + '\"');
            });
        }

        function getExample(title) {
            return dataservice.getExample(title).then(function(data) {
                vm.example = data;
                return vm.example;
            });
        }
    }
})();
