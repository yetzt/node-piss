var exec = require("child_process").exec;

module.exports = function(pid, fn){

	if (!(typeof fn === "function")) return; // no callback, no service
	
	// check pid
	pid = parseInt(pid,10);
	if (isNaN(pid)) return fn(new Error("invalid pid"));

	exec("ps -wwwwww -h -o pid=,uid=,gid=,state=,args= -p "+pid, {cwd: null, env: null}, function(err, stdout, stderr){
		if (err) return fn(null, { pid: null });

		var data = stdout.split("\n").shift().replace(/^\s+|\s+$/g,'').split(/\s+/g);
		return fn(null, {
			pid: parseInt(data.shift(),10),
			uid: parseInt(data.shift(),10),
			gid: parseInt(data.shift(),10),
			state: (data.shift()).substr(0,1).toLowerCase(),
			cmd: data.join(" ")
		});
	});
};
