$(function() {
	$(".menu div").hover(function (event) {
		if (!$(this).hasClass("current")) {$(this).addClass("current");}
		if ($(this).hasClass("submenu")) {$(this).find("ul").show();}
	}, function (event) {
		var $this = $(this);
		$this.siblings("div").each(function(i){
			if ($(this).hasClass("current")) {$this.removeClass("current");}
		});
		if ($(this).hasClass("submenu")) {$(this).find("ul").hide();}
	});
	$(".menu div").click(function (event) {
		$(this).addClass("current").siblings("div").removeClass("current");
	});
	$(".submenu ul").hide();
});