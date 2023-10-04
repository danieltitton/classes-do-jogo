//Classe Herói
class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    attack (){
        let attackHero = ""
        switch (typeHero) {
            case ("Guerreiro"):
                attackHero = "excalibur"
            break
            case ("Mago"):
                attackHero = "magica"
            break
            case ("Monge"):
                attackHero = "artes marciais"
            break
            case ("Ninja"):
                attackHero = "shuriken"
        }
        console.log (`O ${typeHero} atacou usando ${attackHero}!`)
    }
}

//Declaração de Váriaveis
let nameHero = "Skeletor"
let ageHero =  21
let typeHero = "Guerreiro"

//Código
let heroOne = new hero (nameHero, ageHero, typeHero)
heroOne.attack()