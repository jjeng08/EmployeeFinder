$(function () {

	// $('#submit').on('click', function(){
	// 	console.log('hi');
	// }) 
	$('#submit').on('click', getResult)
	function getResult(event) {
		event.preventDefault();
		const answers = [
			parseInt($("input[name='q1']:checked").val()),
			parseInt($("input[name='q2']:checked").val())
		]

		const newEmployee = {
			employeeName: $('#nameInput').val().trim(),
			scores: answers
		}
			// $.ajax({
			// 	method: 'POST',
			// 	url: '/api/employees',
			// 	data: newEmployee
			// })
		const testArray = [
			{
			employeeName: "Bob",
			scores: [5, 5]
			},
			{employeeName: "Sue",
			scores: [1,1]
			}
		]
		let absValArray = [];
		for (let i=0; i<testArray.length; i++) {
			// let testedEmployee = testArray[i];
			let compared=testArray[i];
			let sum=0;
			for (let j=0; j<newEmployee.scores.length; j++) {
				sum += Math.abs(newEmployee.scores[j] - compared.scores[j]);
			}
			absValArray.push(sum);
		}
		console.log(absValArray);
		const smallestDiff = Math.min(...absValArray);
		const location = absValArray.indexOf(smallestDiff);
		const match = testArray[location];
		console.log(match);
	}

});