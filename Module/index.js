const message = {
    companyName : "Node",
    address : "Navsari",
    print : function(){
        console.log("companyName",this.companyName);
        console.log("address",this.address);
        return "hello node js";
    },
}

module.exports=message;