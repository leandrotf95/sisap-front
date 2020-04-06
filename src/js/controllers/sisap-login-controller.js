angular
    .module("sisapApp")
    .controller("SisapLoginController", SisapLoginController);

    SisapLoginController.$inject = [
        'SisapFactory'
    ];

    function SisapLoginController(
        SisapFactory
    )
    {

        //this
        const vm = this;

        //funções públicas
        vm.revelarOcultarSenha = revelarOcultarSenha;

        //variáveis públicas
        vm.usuario = {};
        vm.typeInputPassword = "password";

        //variáveis privadas
        const factory = SisapFactory;

        function revelarOcultarSenha() {
            vm.typeInputPassword = (vm.typeInputPassword === "password") ? "text" : "password";
        }

    }