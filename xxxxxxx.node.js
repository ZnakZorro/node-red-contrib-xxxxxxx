
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
             /*-----------------------*/
            let context = this.context();
            let xxxxxxxcount = context.get('xxxxxxxcount') || 0;
            xxxxxxxcount += 1;
          msg.payload = 1;
          let msg1={"payload":2};
          node.send([msg,msg1]);
        });
    }
    RED.nodes.registerType("xxxxxxx",xxxxxxxNode);
}
