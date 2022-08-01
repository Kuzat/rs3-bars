import { Ability, mapJsonToAbility } from "../types/Ability";

export class AbilitiesDB {
    abilities: { [name: string]: Ability };

    constructor() {
        // Load the abilities from abilities.json file
        this.abilities = {};
        
        const abilitiesJson = require("../entities/abilities.json");
        for (const abilityName in abilitiesJson) {
            this.abilities[abilityName.toLowerCase()] = mapJsonToAbility(abilitiesJson[abilityName]);
        }
    }

    getAbility(name: string): Ability {
        return this.abilities[name.toLowerCase()];
    }
    
    listAbilities(): Ability[] {
        return Object.values(this.abilities);
    }
}