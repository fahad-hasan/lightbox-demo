$(document).ready(function(){
	reset_progress();
	$('.progress-header a').click(function(){
		$('.modal-progress').addClass('hidden');
	});

	$('#reset').click(function(){
		reset_progress();
	});
});

function reset_progress() {
	$.getJSON( "js/data.json", function(conf) {
	 	if (conf.total > 0) {
	 		var anim_duration = conf.data.lightbox.duration;
	 		var anim_start = conf.data.lightbox.start;
	 		var anim_finish = conf.data.lightbox.finish;

	 		//RESETTING PROGRESS
	 		$('.modal-progress').removeClass('hidden');
	 		$('.progressbar').css('width', anim_start +'%');
	 		$('.progress-text div').text('');
	 		$('.progressbar').removeClass('complete');

	 		//ANIMATION
	 		$('.progressbar').animate({
			    width: anim_finish + '%'
  			}, {
    			duration: anim_duration,
    			step: function( now, fx ){
    				var progress = Math.ceil(now);
      				$('.progress-text span').text('Progress ' + progress + '%');
      				if (progress == 100) {
      					$('.progressbar').addClass('complete');
	      				$('.progress-text span').addClass('complete');
	      				$('.progress-text span').text('The task is 100% completed');
      				}
    			},
    			complete: function() {

				}
  			});
		} else {
			$('.modal-progress').addClass('hidden');
		}
	});
}