const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items =["Eat","Code","Sleep"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();
    let day;
    let currentDate = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("ERROR !!");
    }

    let full = currentDate+"/"+month+"/"+year;

    res.render("list", { 
        listTitle : day ,
        fullDate : full ,
        newListItems : items
    });

});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);   
    res.redirect("/");
});

// app.get("/work",function(req,res){
//     res.render("list",{
//         listTitle : "Work List",
//         newListItems : "workItems"
//     });
// });

// app.post("/work",function(req,res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(5000, function () {
    console.log("Server running on port : 5000");
});