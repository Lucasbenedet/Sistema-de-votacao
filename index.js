const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");
const pollController = require("./polls/pollController");
const Poll = require("./polls/Poll");
const answerController = require("./answers/answerController");
const Answer = require("./answers/Answer");

connection
    .authenticate()
    .then(() =>{
        console.log("conexao feita pelo banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use("/",pollController );

app.use("/",answerController);

app.get("/", (req,res) => {
    Poll.findAll({
        order: [
            ['init','DESC']
        ]
    }).then(polls => {
    const date = new Date().toISOString().slice(0, 10);
            res.render("index",{polls: polls, date});  
    })
  
});
app.listen(8080,()=> {
    console.log("App rodando!");
});