angular
    .module("sisapApp")
    .config(function($httpProvider) {

        $httpProvider.interceptors.push("ErrorInterceptor");  

    });