(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        /* jshint validthis:true */
        var readyPromise;

        var service = {
            // Access point: method name
            getExample: getExample,
            ready: ready
        };

        return service;

        function getExample(title) {
            return $http.get('/api/example/' + title)
                .then(getExampleSucceeded)
                .catch(getExampleFailed);

            function getExampleSucceeded(data, status, headers, config) {
                return data.data;
            }

            function getExampleFailed(e) {
                $location.url('/');
                return exception.catcher('XHR Failed for getExample')(e);
            }
        }

        function getReady() {
            if (!readyPromise) {
                // Apps often pre-fetch session data ("prime the app")
                // before showing the first view.
                // This app doesn't need priming but we add a
                // no-op implementation to show how it would work.
                //logger.info('Primed the app data');
                readyPromise = $q.when(service);
            }
            return readyPromise;
        }

        function ready(promisesArray) {
            return getReady()
                .then(function() {
                    return promisesArray ? $q.all(promisesArray) : readyPromise;
                })
                .catch(exception.catcher('"ready" function failed'));
        }
    }
})();
