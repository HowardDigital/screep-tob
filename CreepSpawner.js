import { WORK, MOVE, CARRY, ATTACK } from '/game/constants';
import SourceEnergyCreep from './SourceEnergyCreep'
import ContainerEnergyCreep from './ContainerEnergyCreep'
import AttackCreep from './AttackCreep'
import {constants } from '/game';

export default class CreepSpawner {

    structureSpawn;

    constructor(structureSpawn) {
      this.structureSpawn = structureSpawn;
    }

    spawnSourceEnergyCreep() {
      let energy = this.structureSpawn.store[constants.RESOURCE_ENERGY];

      if(energy >= 200){
        let outcome = this.structureSpawn.spawnCreep([WORK, CARRY, MOVE]).object;
        if(outcome){
          return new SourceEnergyCreep(outcome);
        }
      }
    }


    spawnContainerEnergyCreep() {
      let energy = this.structureSpawn.store[constants.RESOURCE_ENERGY];

      if(energy >= 200){
        let outcome = this.structureSpawn.spawnCreep([WORK, CARRY, MOVE]).object;
        if(outcome){
          return new ContainerEnergyCreep(outcome);
        }
      }
    }

    spawnAttackCreep() {
      console.log("Spawning");
      let outcome = this.structureSpawn.spawnCreep([MOVE, ATTACK]).object;
      console.log(outcome);
      if(outcome){
        return new AttackCreep(outcome);
      }
    }
  }