// This is the major layout component
// Everything should load from here
(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('FrontPage', FrontPage);

    /* @ngInject */
    function FrontPage($timeout, $state, config, logger) {
        var vm = this;

        vm.title = config.appTitle;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.tagline = {
            text: '[Project Title Here]',
            link: '[Project Site Here]'
        };

        activate();

        function activate() {
            // Code that should run when the frontpage is loaded is put here
        }
    }
})();
