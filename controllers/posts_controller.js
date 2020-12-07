const User = require('../models/user');
const Post = require('../models/post');


module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user : req.body.__id
    }, function(err, post){
        if(err){console.log("Error in Creating Post"); return;}

        res.redirect('back')
    });
}