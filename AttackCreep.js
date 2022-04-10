import { prototypes, utils, constants } from '/game';
import { Creep, StructureSpawn } from '/game/prototypes';

export default class AttackCreep {

    thisCreep;

    constructor(thisCreep) {
      console.log("Making attack creep with " + thisCreep)
      this.thisCreep = thisCreep;
    }

    run() {
        console.log("Making attack creep with " + this.thisCreep)
        var enemyCreep = utils.getObjectsByPrototype(Creep).find(creep => !creep.my);
        var enemySpawn = utils.getObjectsByPrototype(StructureSpawn).find(i => !i.my);


        if(enemyCreep && enemyCreep.length >  0 && this.thisCreep.attack(enemyCreep) == constants.ERR_NOT_IN_RANGE) {
            this.thisCreep.moveTo(enemyCreep);
        }

        if((!enemyCreep || enemyCreep.length ==  0) && this.thisCreep.attack(enemySpawn) == constants.ERR_NOT_IN_RANGE) {
            this.thisCreep.moveTo(enemySpawn);
        }
    }
}