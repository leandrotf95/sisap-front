angular
    .module("sisapApp")
    .factory("SisapFactory", SisapFactory);

    SisapFactory.$inject = [
        '$http',
        'apiConstants'
    ];

    function SisapFactory(
        $http,
        apiConstants
    )
    {

        return {
            cadastrarItem: _cadastrarItem,
            login: _login
        };

        function _cadastrarItem(item) {
            return $http.post(apiConstants.BASE_URL + "/item/novo", item);
        }

        function _login(usuario) {
            return $http.get(apiConstants.BASE_URL + "/login", usuario);
        }

    }