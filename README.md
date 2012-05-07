jQTouch-Kitchen-Sink
====================
A collection of useful styles and scripts for use in jQTouch.

See the index.html page for examples.


Features
========
jQTouch-Kitchen-Sink, as the name suggests, provides a whole bucket load of new features on top of jQTouch.

* __Navbar__ - A bottom-of-the-screen icon bar that doesnt suck! Also the ability to override the navbar on individual pages
* __Popouts__ - All <SELECT> boxes can be replaced with a sub-page where the user can properly select the option instead of using a regular HTML select box
* __Prompt to install to homescreen__ - If the viewing device is an iPhone its possible to redirect to a prompt screen to ask your users to install the app to the home screen
* __Styles__ - Lots and lots of new page styles. See the demo for examples


API reference
=============

Global settings / The JQT element
---------------------------------
The #jqt represents the main jQTouch wrapper. All global kitchen-sink options can be applied to this element for use later.

	<div id="jqt" data-iconbase="/img/icons/" data-iconsuffix=".png">
		// ... App content ... //
	</div>

In the above example the option 'iconbase' and 'iconsuffix' options are set to the corresponding value.

Options:
* __iconbase__ - Specify a prefix or base directory of where to look for icons. Can be used with 'iconsuffix' for greater functionality.
* __iconsuffix__ - Automatically suffix all icons with this option (e.g. '.png')
* __popout__ - Set all <SELECT> inputs to automaticly use a popout
* __iwelcome__ - Redirect the browser to this URL if the page is being viewed on an iPhone and it is not running from the desktop. This feature is useful to suggest the user installs the app onto the desktop before continuing. The kitchen-sink demo profiles an example welcome screen.


Page level settings
-------------------
The following options are specified in much the same way as the global settings but effect only that page

	<div id="jqt">
		<div id="home" data-navbar="show">
			// ... Page content ... //
		</div>
	</div>

In the above example the option 'navbar' is set to the corresponding value.

Options:
* __navbar__ - Specify whether the global navbar should be shown on this page. Values are: 'show', 'hide' and 'keep'. If a local navbar is present it will automatically replace the global one.


Individual element settings
---------------------------

The following options are specified in much the same way as the global settings but effect only the individual element.

	<select data-popout="yes">
		... options / optgroups ...
	</select>

In the above example the selectbox is assigned the option 'popout'.

Options:
* __popout__ - Used on <SELECT> elements to automaticly convert the select box into a sub-page selection.


TODO
====
* Proper animated layout of icons when the app rotation changes - perhaps using [Quicksand](http://razorjack.net/quicksand/)
* Support for custom animations per page (data-animation="pop" perhaps?)
* Embedded video support
* Better picturenav swiping support
* Gallery support - possibly like icons but with thumbnailing
* Ability to update the popout select boxes dynamicly rather than having the full generation done at page load
