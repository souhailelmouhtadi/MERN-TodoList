let express = require("express");

let router = express.Router();


let  mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/todolist");

var taskSchema = new mongoose.Schema({
    title: String
});

var Task = mongoose.model("Task", taskSchema);


router.get('/', function (req, res) {

    res.end("Todolist server!!");

});

router.post("/todos", function (req, res) {


    var myData = new Task(req.body);

    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });


    console.log(req.body.title);
});


router.get("/todos/:id", function (req, res) {

    Task.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });

});



router.get("/todos", function (req, res) {

    Task.find(function(err, tasks) {
        if (err)
            res.send(err);

        res.json(tasks);
    });


});



module.exports = router;
