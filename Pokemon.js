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
    pokeLevel () {
        if (this.level <= 5) {
            this.canEvolve = false;
            console.log(`${this.name} can not evolve at this level`)
        } else this.canEvolve = true;
    }
    
    pokeMoves (newMove, x, newMove2) {
        if (this.level > 0 <= 5) {
            this.moves.push({[newMove]: x})
            console.log(`${this.name} 
            learned ${newMove}`);
            
        //(this.level > 5 < 15) 
        } else { this.moves.push({[newMove2]:x})
            console.log(`${this.name} learned ${newMove2}`);
                      
        }
    }
    
}

class EvolvedPokemon extends Pokemon {
    constructor(name, type, weakness, level) {
        super(name, type, weakness, level);
        this.hp = 150;
        this.evolvedFrom = "Charmander"
    }
}
const Charmander = new Pokemon("Charmander", "Fire", "Water", 4)
const Charmeleon = new EvolvedPokemon("Charmeleon", "Fire", "Warter", 15)

Charmander.pokeMoves("Torch", 15)
Charmander.pokeLevel(4)
console.log(Charmander);

Charmeleon.pokeMoves("Fireball", 25)
console.log(Charmeleon);
Charmeleon.pokeMoves("Fireball", 25)





