$(function () {
	//$('#acordion').accordion()
	var $acc = $('#accordion')
		//$acc.accordion('enable')
	 $acc.accordion({
		animate: 500
	});
	
	$("#disable").on('click', function() {
		$acc.accordion('disable')
	});
	
	$("#enable").on('click', function() {
		$acc.accordion('enable')
	});
	
	$(".sprite").click(function() {
		$(this).toggleClass("opened");
	})
});


