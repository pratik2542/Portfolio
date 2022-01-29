exports.user = function(req, res, next) {
    res.render('user', { 
        title: 'Users' ,
        name : 'student'
    });
}

exports.pratik = function(req, res, next) {
    res.render('user', { 
        title: 'User' ,
        name : 'pratik'
    });
}