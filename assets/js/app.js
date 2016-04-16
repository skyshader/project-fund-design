$(document).ready(function() {
	setupProgress();

	$('#give-btn').on('click', function() {
		var amount = $('#amount-input').val();
		var remaining = parseInt($('.fund-progress .filled').data('remaining'));
		remaining = remaining - amount;
		if(remaining < 0) {
			remaining = 0;
		}
		$('.fund-progress .filled').data('remaining', remaining);
		setupProgress();
		$('#amount-input').val('');
		
		if(amount > 0) notify('Thanks for the support!');
	});

	$('#save-btn').on('click', function() {
		notify('The project has been saved!');
	});

	$('#share-btn').on('click', function() {
		notify('The project has been shared!');
	});

});


function setupProgress() {
	var total = parseInt($('.fund-progress .filled').data('total'));
	var remaining = parseInt($('.fund-progress .filled').data('remaining'));
	var percent = ((total - remaining) / total) * 100;

	$('.fund-progress .tooltip .title').text('$' + remaining);
	$('.fund-progress .filled').css('width', percent + '%');
}


function notify(message) {
	$('.notification-box .message').text(message);
	$('.notification-box').css('top', '0');

	setTimeout(function() {
		$('.notification-box .message').text('');
		$('.notification-box').css('top', '-70px');
	}, 1000);
}