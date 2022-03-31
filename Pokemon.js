class Pokemon {
    constructor(name, type, weakness, level) {
        this.name = name;
        this.type = type;
        this.weakness = weakness;
        this.level = level;
        this.canEvolve = true;
        this.hp = 100;
        this.moves = [];  
    }
    pokeMoves (newMove, x) {
        while (this.level > 0 < 5) {
            this.moves.push({[newMove]:x})
            console.log(`${this.name} learned ${newMove}`)
        }
    }
}

class EvolvedPokemon extends Pokemon {
    constructor(name, type, weakness, level) {
        super(name, type, weakness, level, evolvedFrom);
        this.evolvedFrom = evolvedFrom
    }
}
const Charmander = new Pokemon("Charmander", "Fire", "Water", 4)

console.log(Charmander)

Charmander.pokeMoves("torch:15", 15)

console.log()