const express= require('express');
const db_connection= require('./database_Connection/db_connection');
const cors=require('cors')
//use cors middleware
const app=express();
//Your routes and other middleware
const userRouter=require('./api/employeesinfo');
app.use(cors());
app.use('/employeesinfo', userRouter);
console.log('1234567')

app.get('/v1/employeesInfo', (req, res) => {
    db_connection.query('SELECT * FROM employees', (err, results) => {
      if (err) throw err;
      console.log(res.send(results));
    });
  });

  
  app.listen(3001, () => {
    console.log('App listening on port http://localhost:3001/v1/employeesInfo');
    
  });