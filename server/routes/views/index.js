'use strict';

//renders the respective page
exports = module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index',{});
  });

  app.get('/partials/:name', function(req, res) {
		res.render('partials/' + req.params.name);
	});

	app.get('*', function(req, res) {
		res.render('index',{});
	});

};
