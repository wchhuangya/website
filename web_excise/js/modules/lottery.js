$(function () {
	$("li.hide-right").hover(function () {
		$(this).stop().animate({
			right: 0
		}, 240);
	}, function () {
		$(this).stop().animate({
			right: "-60px"
		}, 240);
	});
});