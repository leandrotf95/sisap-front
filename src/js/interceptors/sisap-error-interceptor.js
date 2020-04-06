angular
    .module("sisapApp")
    .factory("ErrorInterceptor", function($q, $location) {

        return {
            responseError: _responseError
        };

        function _responseError(rejection) {

            /* if(rejection.status === 404) {
            } */
            $location.path("/erro");

            return $q.reject(rejection);
        }

    });