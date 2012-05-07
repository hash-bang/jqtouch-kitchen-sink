$(function() {
/* A collection of useful jQTouch style addons */
/* Author: Matt Carter <m@ttcarter.com> */
/* Source: https://github.com/hash-bang/jqtouch-kitchen-sink */

// Global options {{{
$.extend({kitchensink: {
	iconbase: $('#jqt').data('iconbase'),
	iconsuffix: $('#jqt').data('iconsuffix'),
	iwelcome: $('#jqt').data('iwelcome'),
	popout: $('#jqt').data('popout')
}});
// }}}
// Welcome screen (iWelcome) {{{
if (
	 $.kitchensink.iwelcome // Do the iWelcome process
	 && navigator.platform // Understands the platform property
	 && (navigator.platform == 'iPhone') // Says its an iPhone
	 && (!window.navigator.standalone) // Not inside an iPhone home app - redirect to full app
	 && (!window.localStorage.getItem('iwelcome-avoid')) // Not already overridden
)
	document.location = $.kitchensink.iwelcome;
// }}}
// Forms - Popout {{{
$(($.kitchensink.popout ? 'SELECT' : 'SELECT[data-popout]')).each(function(index) {
	var i = $(this);
	var title = i.attr('title') || 'Select...';
	var list = $('<div class="scroll"></div>');
	var thispage = i.parents('#jqt > div').attr('id');

	var id;
	if (i.attr('id')) { // Nominate an ID for this select element (ID is also used to name the popout page)
		id = i.attr('id');
	} else { // No id on element - make one
		id = 'select-' + index;
		i.attr('id', id);
	}

	if (i.children('OPTION').length) {
		var box = $('<ul class="rounded"></ul>');
		i.children('OPTION').each(function() {
			box.append('<li><a rel="' + $(this).val() + '" href="#">' + $(this).text() + '</a></li>');
		});
		list.append(box);
	}
	i.find('OPTGROUP').each(function() {
		list.append('<h1>' + $(this).attr('label') + '</h1>');
		var box = $('<ul class="rounded"></ul>');
		$(this).children().each(function() {
			box.append('<li><a rel="' + $(this).val() + '" href="#">' + $(this).text() + '</a></li>');
		});
		list.append(box);
	});

	i.replaceWith('<a href="#popout-' + id + '"><span>' + title + '</span><input type="hidden" id="' + id + '" value="' + i.val() + '"/></a>');
	list.on('click', 'a', function() {
		var input = $('#jqt div#' + thispage + ' INPUT#' + id)
		input.val($(this).attr('rel'));
		input.siblings('SPAN').text($(this).text());
		jQT.goBack('#' + thispage);
	});

	var page = $('<div id="popout-' + id + '"><div class="toolbar"><h1>' + title + '</h1><a class="back" href="#' + thispage + '">Back</a></div></div>');
	page.bind('pageAnimationStart', function() {
		var currentval = $('#jqt div#' + thispage + ' INPUT#' + id).val();
		$(this).find('a').each(function() {
			$(this).toggleClass('ticked', currentval == $(this).attr('rel'));
		});
	});
	page.append(list);
	$('#jqt').append(page);
});
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
			$(this).addClass('navbar-padding');
		}
	}
});
// }}}

});
