/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('worker'); // -> 'a thing'
 */
 module.exports = function(worker){
     worker.suicide();
     //console.log('jestem worker:' + worker);
     //worker.moveTo(5,5);
     if (worker.energy<worker.energyCapacity) {
     var target = worker.pos.findNearest(Game.SOURCES_ACTIVE);
       if(target) {
           worker.moveTo(target);
           worker.harvest(target);
        }
     } else {
     worker.moveTo(Game.spawns.Spawn1);
    worker.transferEnergy(Game.spawns.Spawn1);
     }
 }