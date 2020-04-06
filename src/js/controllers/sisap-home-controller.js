angular
    .module("sisapApp")
    .controller("SisapHomeController", SisapHomeController);

    SisapHomeController.$inject = [
        'SisapFactory'
    ];

    function SisapHomeController(
        SisapFactory
    )
    {

        //this
        const vm = this;

        //funções públicas
        vm.cadastrarItem = cadastrarItem;
        vm.login = login;

        //variáveis públicas

        //variáveis privadas
        const factory = SisapFactory;

        function cadastrarItem() {

            let item = {
                "nome": "Celular",
                "descricao": "Aparelho eletrônico da marca Motorola"
            };

            factory.cadastrarItem(item)
                .then(function(response) {
                    console.log("ok");
                    console.log(response);
                    
                })
                .catch(function(erro) {
                    console.log("erro");
                    console.log(erro);
                    
                });

        }

        function login() {

            let usuario = {
                "nomeUsuario": "leandrobsb",
                "senha": "123",
                "tipoUsuario": 1
            };

            factory.login(usuario)
                .then(function(response) {
                    console.log("ok");
                    console.log(response);
                    
                })
                .catch(function(erro) {
                    console.log("erro");
                    console.log(erro);
                    
                });

        }

    }