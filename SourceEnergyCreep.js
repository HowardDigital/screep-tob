import { prototypes, utils, constants } from '/game';
import { Creep } from '/game/prototypes';

export default class SourceEnergyCreep {

    thisCreep;
    source;
    spawn;

    constructor(thisCreep) {
      this.thisCreep = thisCreep;
      this.source = utils.getObjectsByPrototype(prototypes.Source)[0];
      this.spawn = utils.getObjectsByPrototype(prototypes.StructureSpawn).find(i => i.my);
    }

    run() {
      console.log("ContainerEnergyCreep tick");

      if(!this.thisCreep.store){
        return;
      }
      
      if(this.thisCreep.store.getFreeCapacity(constants.RESOURCE_ENERGY)) {
          if(this.thisCreep.harvest(this.source) == constants.ERR_NOT_IN_RANGE) {
              this.thisCreep.moveTo(this.source);
          }
      } else {
          if(this.thisCreep.transfer(this.spawn, constants.RESOURCE_ENERGY) == constants.ERR_NOT_IN_RANGE) {
              this.thisCreep.moveTo(this.spawn);
          }
      }
    }
}