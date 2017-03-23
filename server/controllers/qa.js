console.log('QA CONTROLLER IS HERE');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function QAController(){
  this.questions = function(req,res){
    Question.find({}, function(err, questions){
      if(err) {
        console.log("something went wrong");
        res.json({placeholder: "error with questions"});
      }
      else {
        console.log("back-end users controller response: ",questions);
        res.json({questions});
      }
    })
  };
  this.answers = function(req,res){
    Answer.find({}, function(err, answers){
      if(err) {
        console.log("something went wrong");
        res.json({placeholder: "error with questions"});
      }
      else {
        console.log("back-end users controller response: ",answers);
        res.json({answers});
      }
    })
  };

  this.createq = function(req,res){
    var question = new Question({name: req.body.name, description: req.body.description});
    question.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong with saving question');
        res.json({error: 'there was a problem with creating question'})
      }
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a new question in qa.js!');
        res.json({placeholder: "success"});
      }
    })
  };


  this.showone = function(req,res){
    Question.findOne({_id: req.params.id}).populate("answers").exec(function(err, question){
      if(err) {
        res.json({err});
      }
      else{
        res.json({question});
      }
    })
  };

  this.update = function(req,res){
    var id = req.params.id;
    console.log(">>>>>>>>>>>",req.body, "<<<<<<<<<<<<<<");
    var count = req.body;
    count++;

    Answer.update({_id: id}, { birthday: count }, function(err, answer){
      if(err) {
        console.log(">>>>>>>>>>", birthday);
        res.redirect('/');
      }
      else{
        console.log("LIKE WAS UPDATED");
        res.json({placeholder:'update'});
      }
        })
      }

  this.createa = function(req,res){
    Question.findOne({_id: req.params.id}, function(err, question){
           var answer = new Answer({name: req.body.name, description: req.body.description, username: req.body.username, likes: 0});
           answer._question = question._id;
           question.answers.push(answer);
           answer.save(function(err){
                   question.save(function(err){
                         if(err) {
                           console.log('Error');
                          }
                         else {
                            console.log("answer was saved");
                            res.redirect('/');
                          }
                   });
           });
     });
  }


}
module.exports = new QAController(); // what does this export?
