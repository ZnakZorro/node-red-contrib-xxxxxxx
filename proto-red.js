#!/usr/local/bin/node
"use strict";
const fs       = require("fs");
const path     = require('path');
const request  = require('/usr/lib/node_modules/request');
const DS ="/";

let redname = __dirname.split('-').pop();

var args = process.argv.slice(2)[0];
console.log(args);
if (args != undefined) redname = args;

let reddir = 'node-red-contrib-'+redname;

if (!fs.existsSync(reddir)){fs.mkdirSync(reddir);}

function prepareContent(content,redname){
	let out = content.replace(/xxxxxxx/g,redname);
	return out;
}

let proto =[
'https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/README.md',
'https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/package.json',
'https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/xxxxxxx.node.js',
'https://raw.githubusercontent.com/ZnakZorro/node-red-contrib-xxxxxxx/master/xxxxxxx.node.html'
];

//console.log(proto);
console.log("\n\n");
console.log("========================================");
console.log("Proto for: ",redname);
console.log("========================================");
//setTimeout(function(){console.log("\nsudo cp proto-red.js /bin/red-prototype.js\n");},3000);


	proto.forEach(function(url){
		request.get(url, function (error, response, body) {
			if (body){
				var newContent = prepareContent(body,redname);
				var newName = url.split(DS).pop().replace(/xxxxxxx/g,redname);			
				fs.writeFile(reddir+DS+newName, newContent, function(err) {
					if(err) {return console.log(err);}
					console.log("Saved => ",reddir+DS+newName,' ['+newContent.length+' bytes]');
					console.log("......................................");
				});
			}
		});
	});

