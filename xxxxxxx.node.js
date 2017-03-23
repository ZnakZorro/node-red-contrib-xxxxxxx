
module.exports = function(RED) {
	"use strict";
    function xxxxxxxNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.interval = config.interval;
        this.bariera = parseInt(config.bariera);
		
        var node = this;
        this.on('input', function(msg) {
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

			msg.payload = xxxxxxxcount;
			var msg2={"payload":Time};				
			var msg3={"payload":lacalTime};
			var msg4={"payload":{"lacalTime":lacalTime,"xxxxxxxcount":xxxxxxxcount,"Time":Time}};
			/*-----------------------*/
			node.send([msg,msg2,msg3,msg4]);	
        });
    }
    RED.nodes.registerType("xxxxxxx",xxxxxxxNode);
}
