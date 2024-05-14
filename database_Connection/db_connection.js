const mysql =require('mysql2')

const dbconection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    insecureAuth : true,
    database:"kishan"
})
dbconection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // dbconection.query(`select * from employees`,(err,result,field)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     return console.log(result)
    // })
  });
 
  module.exports=dbconection