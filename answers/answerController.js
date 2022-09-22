const express = require("express");
const router = express.Router();
const Answer = require("./Answer");
const Poll = require("../Polls/Poll");

router.get("/admin/answers/vote/:id", (req,res) => {

    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/");
    };

    Poll.findByPk(id).then(polls => {
    if(polls != undefined){
        let cont1 = 0; 
        let cont2 = 0; 
        let cont3 = 0;
        Answer.findAll().then(answers =>{
            const date = new Date().toISOString().slice(0, 10);
                res.render("admin/answers/vote",{polls : polls,answers : answers,cont1,cont2,cont3,date});
            })
    }else{
        res.redirect("/");
    };
}).catch(erro =>{
        res.redirect("/");
});
});

router.post("/answers/save", (req,res) => {
    let vote = req.body.vote;
    let pollId = req.body.pollId;

    Answer.create({
        vote : vote,
        pollId : pollId

    }).then(() => {
        res.redirect("/")
    })

});


//Answer.sync({force: true});

module.exports = router;