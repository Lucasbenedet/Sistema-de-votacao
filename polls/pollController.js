const express = require("express");
const router = express.Router();
const Poll = require("./Poll");

router.get("/admin/polls/new", (req,res) => {
    res.render("admin/polls/new");
});

router.post("/polls/save", (req,res) => {

        let title = req.body.title;
        let option1 = req.body.option1;
        let option2 = req.body.option2;
        let option3 = req.body.option3;
        let init = req.body.init;
        let end = req.body.end;

        Poll.create({
            title: title,
            option1: option1,
            option2: option2,
            option3: option3,
            init: init,
            end: end
        }).then(() => {
            res.redirect("/")
        })
    
    });

    router.post("/polls/delete", (req,res) => {
        let id = req.body.id;
        if(id!=undefined){
            if(!isNaN(id)){
                Poll.destroy({
                    where: {
                        id:id
                    }
                }).then(() =>{
                    res.redirect("/");
                });
    
            }else{
                res.redirect("/");
            }
        }else{
            res.redirect("/");
        };
    });


router.get("/admin/polls/edit/:id", (req,res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/");
    };

Poll.findByPk(id).then(polls => {
    if(polls != undefined){

        res.render("admin/polls/edit",{polls : polls});

    }else{
        res.redirect("/");
    };
    }).catch(erro =>{
        res.redirect("/");
    });
});


router.post("/polls/update", (req,res) => {
    let id = req.body.id;
    let title = req.body.title;
    let option1 = req.body.option1;
    let option2 = req.body.option2;
    let option3 = req.body.option3;
    let init = req.body.init;
    let end = req.body.end;
    Poll.update({title: title, option1: option1,option2: option2,option3: option3,init: init,end: end},{
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/");
    });
});

//Poll.sync({force: true});

module.exports = router;