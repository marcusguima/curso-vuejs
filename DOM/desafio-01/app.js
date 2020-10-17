new Vue({
    el: '#desafio',
    data:{
        nome: 'Marcus Guimaraes',
        idade: '19',
        imagem: 'https://odia.ig.com.br/_midias/jpg/2020/06/24/pizza-17874446.jpg'
    },
    methods:{
        idadeMulti(){
            result = this.idade * 3
            return result
        },
        numeroRandomico(){

            return Math.random()

        }
    }





})