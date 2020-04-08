const express = require('express');
const path = require('path')
const app = express();
var port = process.env.PORT;

if(port == undefined){
  port = 3000;
};

app.use(express.static(path.join(__dirname, './../public')));

app.listen(port,() => {
  console.log('Server is listning on port : '+port);
});
