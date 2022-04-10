import { prototypes, utils, constants } from '/game';
import { Creep } from '/game/prototypes';

export default class ContainerEnergyCreep {

    thisCreep;
    container;
    spawn;

    constructor(thisCreep) {
      this.thisCreep = thisCreep;
      this.container = utils.getObjectsByPrototype(prototypes.StructureContainer)[0];
      this.spawn = utils.getObjectsByPrototype(prototypes.StructureSpawn).find(i => i.my);
    }

    run() {
      if(!this.thisCreep.store){
        // console.log("Null store for ContainerEnergyCreep");
        return;
      }

      if(this.thisCreep.store.getFreeCapacity(constants.RESOURCE_ENERGY)) {
        // console.log("ContainerEnergyCreep has free capacity, attempt to harvest energy");
        let outcome1 = this.thisCreep.withdraw(this.container, constants.RESOURCE_ENERGY)
        // console.log(outcome1)
          if(outcome1 == constants.ERR_NOT_IN_RANGE) {
            // console.log("ContainerEnergyCreep has free capacity but no container close, moving to container");
              this.thisCreep.moveTo(this.container);
          }
      } else {
        // console.log("ContainerEnergyCreep has no capacity, return to spawn");
          if(this.thisCreep.transfer(this.spawn, constants.RESOURCE_ENERGY) == constants.ERR_NOT_IN_RANGE) {
              this.thisCreep.moveTo(this.spawn);
          }
      }
    }
}