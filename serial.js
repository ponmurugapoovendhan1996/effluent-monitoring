var mysql = require('mysql');

var dataset=[];                        //this array is what u asked for
var con = mysql.createConnection({     //creating connection...
  host: "localhost",
  user: "root",
  password: "",
  database:"foo"
});
con.connect(function(err) 
{
	  //console.log("connected to db");
  var sql = "select data from effluents"; //selecting data field from table
  con.query(sql, function (err, result) 
  {
         if (err) throw err;
         for(var res in result)                   //looping through result set and pushing data to array--dataset
             {
				 //console.log(result[res].data);  
                 dataset.push(result[res].data);
			 }
         console.log(dataset);
   });

}); 
