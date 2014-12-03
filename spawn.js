/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawn'); // -> 'a thing'
 */
 
 module.exports = function(spawn){
     console.log(spawn + ' has ' + spawn.energy + ' energy');
     if (spawn.energy > 0){
         var new_name = 'Worker' + Memory.screep_id;
        var ret = spawn.createCreep([Game.WORK, Game.WORK, Game.CARRY, Game.MOVE], new_name, {'role':'worker'});
        console.log("ret= " + ret);
        if (ret == new_name) {
          console.log("created creep: " + new_name);
          //Memory.creeps.new_name.role = 'worker';
          //new_name.role = 'worker';
          Memory.screep_id++;
          
        } else {
            console.log('failed to create ' + new_name);
        }
     }
 }