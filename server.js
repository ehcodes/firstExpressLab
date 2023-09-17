const express = require("express");
const app = express();
const localPort = 3000;
const siteAddress = `http://localhost:3000/`

// Greetings
app.get(`/greeting`,function(req,res){
  res.send(`<p>Hey there, you person!</p>`)
})

app.get(`/greeting/:name`,function(req,res){
  res.send(`<p>I didn't expect to see you here, ${req.params.name}!</p>`)
})

// Tip Calculator
app.get(`/tip/:total/:tipPercentage`,function(req,res){
  const tip = req.params.total*req.params.tipPercentage/100
  res.send(`<p>${tip}</p>`)
})

app.listen(localPort, () => {
  console.log(`listening on port ${localPort}`);
  console.log(siteAddress);
});