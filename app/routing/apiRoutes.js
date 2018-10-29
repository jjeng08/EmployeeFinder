let employees = require('../data/employees.js');

module.exports = function (app) {
	app.get('/api/employees', function (req, res) {
		res.json(employees);
	});

	app.post('/api/employees', function (req, res) {
		employees.push(req.body);
		res.end();
	})
}

