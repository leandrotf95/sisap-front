angular
    .module("sisapApp")
    .config(SisapRoutes);

    SisapRoutes.$inject = [
        "$routeProvider"
    ];

    function SisapRoutes(
        $routeProvider
    )
    {

        $routeProvider
            .when("/login", {
                templateUrl: "./views/sisap-login-tpl.html"
            })
            .when("/home", {
                templateUrl: "./views/sisap-home-tpl.html",
                controller: "SisapHomeController as vm"
            })
            .when("/erro", {
                templateUrl: "./views/sisap-erro-tpl.html"
            })
            .otherwise({
                redirectTo: "login"
            });

    }
