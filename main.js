console.log('start');
var spawn = require('spawn');
var worker = require('worker');

for(var s in Game.spawns) {
	    spawn(Game.spawns[s]);
}

for (var w in Game.creeps){
	    worker(Game.creeps[w]);
}
