class Pokemon {
    constructor(name, type, weakness, level) {
        this.name = name;
        this.type = type;
        this.weakness = weakness;
        this.level = level;
        this.canEvolve = true;
        this.hp = 100;
        this.moves = {};

        
    }
}

class EvolvedPokemon extends Pokemon {
    constructor(name, type, weakness, level) {
        super(name, type, weakness, level, evolvedFrom);
        this.evolvedFrom = evolvedFrom
    }
}