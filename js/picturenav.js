$(function() {
	$('.picturenav').bind('swipe', function(e, d) {
		var offset = $(this).data('offset') || 0;
		if (d.direction == 'left') {
			offset = (offset+1 > $(this).find('li').length-1) ? 0 : offset+1;
		} else
			offset = (offset-1 < 0) ? $(this).find('li').length-1 : offset-1;
		$(this).data('offset', offset);

		console.log('show ' + offset);
		$(this).css('background-image', 'url(' + $(this).find('li > img').eq(offset).attr('src') + ')');
	});
});
