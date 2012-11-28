(function($, window) {

$(window).load(function() {
	$('.card:last')
		.one('webkitTransitionEnd', function() {
			$('#title')
				.one('webkitTransitionEnd', function() {
					$('#title-bg')
						.one('webkitTransitionEnd', function() {
							setTimeout(function() {
								$('.card').css({'-webkti-mask-image': 'rgb(0,0,0,0.7)'});
							}, 1000);
						})
						.removeClass('hidden')
					;
				})
				.removeClass('hidden')
			;
		});
	$('.card')
		.on('webkitTransitionEnd', function(event) {
			event.stopPropagation();
		})
		.removeClass('hidden');
});

})(jQuery, window);
