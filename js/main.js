(function($){
	$(function(){
		$(".modal").modal();
		setInterval(function() {
			$(".rotating-image").each(function(i,e) {
				console.log(e)
				$(e).attr("data-cur", 1+(parseInt($(e).attr("data-cur")) % parseInt($(e).attr("data-max"))));
				$(e).attr("src", $(e).attr("data-base")+$(e).attr("data-cur")+$(e).attr("data-suffix"));
			});
		}, 1000);
	});
})(jQuery);
