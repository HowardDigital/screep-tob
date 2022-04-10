import { getObjectsByPrototype } from '/game/utils';
import {StructureSpawn } from '/game/prototypes';
import CreepSpawner from './CreepSpawner';

var workers = [];
var attackers = [];

export function loop() {
    let mySpawn = getObjectsByPrototype(StructureSpawn).find(i => i.my);
    let creepSpawner = new CreepSpawner(mySpawn);

    let newWorkerCreep;

    for(const i in Game.creeps) {
        console.log("TEST");
    }

    if(workers.length < 4){
        newWorkerCreep = creepSpawner.spawnContainerEnergyCreep();
    }

    if(newWorkerCreep){
        workers.push(newWorkerCreep);
    }

    let newAttackCreep;

    if(workers.length == 3){
        newAttackCreep = creepSpawner.spawnAttackCreep();
    }

    if(newAttackCreep){
        attackers.push(newAttackCreep);
    }

    console.log("Attacker count " + attackers.length);
       
    for(let worker of workers){
        worker.run();
    }

    for(let attacker of attackers){
        attacker.run();
    }

}
