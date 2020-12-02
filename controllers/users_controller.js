module.exports.profile = function(req, res){
    return res.render('users', {
        title :"Users/ profile"
    });
}

module.exports.address = function(req, res){
    return res.end('<h1>Gone are the days</h1>');
}