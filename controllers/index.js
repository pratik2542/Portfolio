exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

exports.projects = function(req, res, next) {
    res.render('index', { title: 'Projects' });
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About' });
}

exports.services = function(req, res, next) {
    res.render('index', { title: 'Services' });
}

exports.contact = function(req, res, next) {
    res.render('index', { title: 'Contact Me' });
}