# Piss (is long for PS)

Get UID, GID, state and command with args of a specific process, determined by PID.

This works on Linux and Darwin, although the subtly different implementation of `ps` on those platforms may cause different results. Good luck.

## Install

```
npm install piss
```

## Usage

``` javascript
var ps = require("piss");

ps(12345, function(err, data){
	if (err) return console.log(err);
	if (!data.pid) return console.log("No such process.");
	console.log("PID: ", data.pid);
	console.log("UID: ", data.uid);
	console.log("GID: ", data.gid);
	console.log("State: ", data.stat);
	console.log("Command: ", data.cmd);
});
```