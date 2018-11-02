$(function () {
	$('#submitButton').on('click', getResult)
	function getResult(event) {
		event.preventDefault();

		const newEmployee = {
			employeeName: $('#nameInput').val().trim(),
			employeeBio: "[AN HR-DESIGNATED PERSONALITY WILL BE ASSIGNED SHORTLY]",
			employeePic: $('#picInput').val().trim(),
			scores: [
				parseInt($("input[name='q1']:checked").val()),
				parseInt($("input[name='q2']:checked").val()),
				parseInt($("input[name='q3']:checked").val()),
				parseInt($("input[name='q4']:checked").val()),
				parseInt($("input[name='q5']:checked").val()),
				parseInt($("input[name='q6']:checked").val()),
				parseInt($("input[name='q7']:checked").val()),
				parseInt($("input[name='q8']:checked").val()),
				parseInt($("input[name='q9']:checked").val()),
				parseInt($("input[name='q10']:checked").val())
			]
		}

		const validation1 = newEmployee.scores;
		const validation2 = newEmployee.employeeName;
		const validation3 = newEmployee.employeePic;

		const errorBox = document.getElementById("errorBox");

		if (validation1.includes(NaN) || validation2 === "" || validation3 === "") {
			errorBox.style.display = "block";
			$('#errorBox').toggleClass("alt");
		} else {
			errorBox.style.display = "none";

			$.ajax({
				method: 'POST',
				url: '/api/employees',
				data: newEmployee
			}).then(function (data) {
				const partnerName = $('#partnerName');
				const partnerPic = $('#partnerPic');
				const partnerBio = $('#partnerBio');

				partnerName.empty();
				partnerBio.empty();
				partnerPic.empty();

				partnerName.append(`<div id="actualName">${data.employeeName} </div>`);
				partnerBio.append(`<div>"${data.employeeBio}"</div>`)
				partnerPic.append(`<img id="actualPic" src ="${data.employeePic}">`)
			})


			const modal = document.getElementById('myModal');

			var span = document.getElementsByClassName("close")[0];

			modal.style.display = "block";

			span.onclick = function () {
				modal.style.display = "none";
			}

			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
		}
	}
})