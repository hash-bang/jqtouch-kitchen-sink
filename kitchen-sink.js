$(function() {
/* A collection of useful jQTouch style addons */
/* Author: Matt Carter <m@ttcarter.com> */
/* Source: https://github.com/hash-bang/jqtouch-kitchen-sink */

// Global options {{{
$.extend({kitchensink: {
	iconbase: $('#jqt').data('iconbase'),
	iconsuffix: $('#jqt').data('iconsuffix')
}});
// }}}
// Icons {{{
$('#jqt .icons > li[data-icon]').each(function() {
	$(this).css('background-image', 'url(' + $.kitchensink.iconbase + $(this).data('icon') + $.kitchensink.iconsuffix + ')');
});
// }}}
// Articles {{{
// }}}
// Post {{{
// No JS needed
// }}}
// Picturenav {{{
$('.picturenav').bind('swipe', function(e, d) {
	var direction = (d && d.direction) || 'left';
	var offset = $(this).data('offset') || 0;
	if (direction == 'left') {
		offset = (offset+1 > $(this).find('li').length-1) ? 0 : offset+1;
	} else
		offset = (offset-1 < 0) ? $(this).find('li').length-1 : offset-1;
	$(this).data('offset', offset);
	$(this).css('background-image', 'url(' + $(this).find('li > img').eq(offset).attr('src') + ')');
}).trigger('swipe');
// }}}
// Navbar {{{
$('#jqt .navbar > ul > li[data-icon], #jqt > .global-navbar > ul > li[data-icon]').each(function() {
	$(this).css('background-image', 'url(' + $.kitchensink.iconbase + $(this).data('icon') + $.kitchensink.iconsuffix + ')');
});
// }}}
// Global-Navbar {{{
if ($('#jqt > .global-navbar').length) { // If there is a global navbar defined
	$.kitchensink.navbar = $('#jqt > .global-navbar');
	$('#jqt').before($.kitchensink.navbar); // Move this element to be a peer of #jqt
}
$('#jqt > div').bind('pageAnimationEnd', function(e, info) { // Install page change listener
	if (info.direction == 'out') return; // Ignore outgoing pages

	var navbarshow;
	if ($(this).find('.navbar').length) { // This page has its own navbar
		navbarshow = 'local'; // Force the global setting to use the local
	} else if ($.kitchensink.navbar) { // Not specified but there is a global navbar
		navbarshow = $(this).data('navbar') || 'show'; // Ask the page what it wants to do
	} else
		navbarshow = 'hide';

	if ($.kitchensink.navbarlocal) { // Local navbar in use - destroy
		$.kitchensink.navbarlocal.remove();
		$.kitchensink.navbarlocal = 0;
	}

	if (navbarshow) {
		if ($.kitchensink.navbar && navbarshow == 'hide') {
			$.kitchensink.navbar.hide();
		} else if (navbarshow == 'show' || navbarshow == 'local') { // Show something - either local or global
			if (navbarshow == 'local') { // Replace with local
				if ($.kitchensink.navbar)
					$.kitchensink.navbar.hide();
				$.kitchensink.navbarlocal = $(this).find('.navbar').clone();
				$('#jqt').before($.kitchensink.navbarlocal);
			} else if (navbarshow == 'show') {
				$.kitchensink.navbar.show();
			}
			console.log('Add padding to ' + $(this).attr('id'));
			$(this).addClass('navbar-padding');
		}
	}
});
// }}}

});
