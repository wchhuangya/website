$(function(){
	$(".share span").hover(function (event) {
		$(this).animate({"background-positionY":"-50px"}, 500);
	}, function (event) {
		$(this).stop(false, true).css("background-positionY", "-5px");
	});
});