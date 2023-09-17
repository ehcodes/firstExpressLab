const express = require("express");
const app = express();
const localPort = 3000;
const siteAddress = `http://localhost:3000/`

// Greetings
app.get(`/greeting`,function(req,res){
  res.send(`Hey there, you person!`)
})

app.get(`/greeting/:name`,function(req,res){
  res.send(`I didn't expect to see you here, ${req.params.name}!`)
})

app.listen(localPort, () => {
  console.log(`listening on port ${localPort}`);
  console.log(siteAddress);
});