
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.angular = function(req, res){
  res.render('angular', { title: 'Angular JS Example' })
};

exports.backbone = function(req, res){
  res.render('backbone', { title: 'Backbone JS Example' })
};