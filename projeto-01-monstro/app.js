new Vue({
    el:'#app',
    data:{
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        attack(special){
            this.hurt('monsterLife',5,10, special, 'Jogador', 'Monstro', 'player')
            if(this.monsterLife > 0){
                this.hurt('playerLife',7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hurt(props, min, max, special, source, target, cls){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[props] = Math.max(this[props] - hurt, 0)
            this.registerLogs(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLogs(`Jogador ganhou força de ${heal}.`, 'player')
        },
        healAndHurt(){
            this.heal(10,15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        registerLogs(text, cls){
            this.logs.unshift({ text, cls })
        }
    },
    watch:{
        hasResult(value){
            if (value)
                this.running = false
        }
    }
})