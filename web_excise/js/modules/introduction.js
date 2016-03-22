$(function() {
	$(".menu div").hover(function (event) {
		if (!$(this).hasClass("current")) {$(this).addClass("current");}
	}, function (event) {
		var $this = $(this);
		$this.siblings("div").each(function(i){
			if ($(this).hasClass("current")) {$this.removeClass("current");}
		});
	});
	$(".menu div").click(function (event) {
		$(this).addClass("current").siblings("div").removeClass("current");
	});
});