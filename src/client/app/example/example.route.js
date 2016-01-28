(function() {
    'use strict';

    angular
        .module('app.example')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'example',
                config: {
                    abstract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/'
                }
            },
            {
                state: 'front',
                config: {
                    url: '/',
                    templateUrl: 'app/example/example.html',
                    controller: 'Example',
                    controllerAs: 'vm',
                    title: 'Front Page'
                }
            },
            {
                state: 'detail',
                config: {
                    url: '/:title',
                    templateUrl: 'app/example/example.detail.html',
                    controller: 'ExampleDetail',
                    controllerAs: 'vm',
                    title: 'Example Detail'
                }
            }
        ];
    }
})();
