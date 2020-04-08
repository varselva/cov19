const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res) => {
  res.send('Hi Varun');
})

app.listen(port,() => {
  console.log('Server is listning on port : '+port)
})
