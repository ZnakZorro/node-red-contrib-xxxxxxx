
module.exports = function(RED) {
	"use strict";
    function xxxxxxxNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.interval = config.interval;
        this.bariera = parseInt(config.bariera);
		
        var node = this;
        this.on('input', function(msg) {
			
//console.log(msg);			
//console.log(msg.payload);			
const REPEAT_IN_MILLIS = 30000;	
let licznik =0;		
node.interval = setInterval(function() {
	//console.log('#17 msg.payload=',msg.payload); 
	//node.emit("input", {"text":"abc"}); 
	//node.send([{"payload":1},{"payload":2},{"payload":3},{"payload":4},{"payload":5}]); 
	node.send([{"payload":licznik++}]); 
}, REPEAT_IN_MILLIS);		
			
			
			
			this.status({fill:"red",shape:"ring",text:"Waiting for xxxxxxx"});
			let that = this;
				//console.log(this.interval,this.bariera);
				//console.log(node.interval,node.bariera);
	
				 /*-----------------------*/
					let context = this.context();
					let xxxxxxxcount = context.get('xxxxxxxcount') || 0;
					xxxxxxxcount += 1;
					context.set('xxxxxxxcount',xxxxxxxcount);

					var d = new Date();
					var Time = d.getTime();
					var lacalTime = d.toLocaleString();

					//msg.payload = xxxxxxxcount;
					var msg1={"payload":xxxxxxxcount};				
					var msg2={"payload":Time};				
					var msg3={"payload":lacalTime};
					var msg4={"payload":{"lacalTime":lacalTime,"xxxxxxxcount":xxxxxxxcount,"Time":Time}};
				/*-----------------------*/
				this.status({fill:"green",shape:"dot",text:"Finish for xxxxxxx"});
				node.send([msg,msg1,msg2,msg3,msg4]);

			
        });
    }
    RED.nodes.registerType("xxxxxxx",xxxxxxxNode);
}
