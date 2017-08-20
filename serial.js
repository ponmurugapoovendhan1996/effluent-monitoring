//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/test";
var Serialport = require('serialport');
var portName = 'COM15';
//var d = new Date();
//var timestamp=[],data=[];
var sp = new Serialport(portName, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
var fromserial
//MongoClient.connect(url, function (err, db) {
  //f (err) throw err;
  sp.on('data', function(input) {
    fromserial=parseInt(input,10);
	//var time=Date.now();
	//var myobj = { "_id":time,"data":fromserial};
  if(fromserial!=NaN)
  console.log(fromserial);
	
 // db.collection("effluent").insertOne(myobj);
 
 
});
