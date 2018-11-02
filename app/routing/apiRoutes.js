let employees = require('../data/employees.js');

module.exports = function (app) {
	app.get('/api/employees', function (req,res) {
		res.json(employees);
	})
	
	app.post('/api/employees', function (req, res) {
		const newEmployee = req.body;

		let absValArray = [];
		for (let i = 0; i < employees.length; i++) {
			let compared = employees[i];
			let sum = 0;
			for (let j = 0; j < newEmployee.scores.length; j++) {
				sum += Math.abs(newEmployee.scores[j] - compared.scores[j]);
			}
			absValArray.push(sum);
		}

		const smallestDiff = Math.min(...absValArray);
		const location = absValArray.indexOf(smallestDiff);
		const match = employees[location];

		res.json(match);

		employees.push(newEmployee);
	})
}