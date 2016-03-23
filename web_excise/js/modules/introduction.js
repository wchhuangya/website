$(function() {
	$(".menu>ul>li>a").click(function(event) {
		var $this = $(this);
		$this.parent("li").siblings().children("a").each(function (event) {
			if ($(this).hasClass("current")) {
				$(this).removeClass("current");
				$this.addClass("current");
				return;
			}
		});
	});
});