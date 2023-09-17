const express = require("express");
const app = express();
const localPort = 3000;
const docType = `<!DOCTYPE html>`;
const siteAddress = `http://localhost:3000/`;

// Greetings
app.get(`/greeting`, function (req, res) {
  res.send(`${docType}<p>Hey there, you person!</p>`);
});

app.get(`/greeting/:name`, function (req, res) {
  res.send(`${docType}<p>I didn't expect to see you here, ${req.params.name}!</p>`);
});

// Tip Calculator
app.get(`/tip/:total/:tipPercentage`, function (req, res) {
  const tip = (req.params.total * req.params.tipPercentage) / 100;
  res.send(`${docType}<p>${tip}</p>`);
});

// Magic 8 Ball
app.get(`/magic/:question`, function (req, res) {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let randomIndex = Math.floor(Math.random()*responses.length);
  console.log(randomIndex);
  res.send(`${docType}<h1>${responses[randomIndex]}</h1>`);
});

app.listen(localPort, () => {
  console.log(`listening on port ${localPort}`);
  console.log(siteAddress);
});
