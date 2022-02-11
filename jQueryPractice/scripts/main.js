$(function () {
	var rnd = Math.round(Math.random() * 10);
	var clicks = 0;
	
	

	$('#guess').click(function() {
		var currentGuess = $("#number").val()
		currentGuess = parseInt(currentGuess);
		if (isNaN(currentGuess)) {
			alert("Molq, vyvedete validno chislo");
			return;
		}
		else {
			clicks++;
			$("#clicks").text("number of tries:" + clicks);
			if (currentGuess == rnd) {
				$(this).attr('disable', true);
				$('#game').hide();
				$('#win').show();
			}
		}
		if (currentGuess < rnd) {
			$('#downarrow').hide(900);
			$('#uparrow').show(900);
		}
		else {
			$('#uparrow').hide(900);
			$('#downarrow').show(900);
			
		};
	});
	
	$("#newGame").click(function() {
		location.reload();
	})
});


