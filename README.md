jQTouch-Kitchen-Sink
====================
A collection of useful styles and scripts for use in jQTouch.

[Kitchen Sink Demo](demo.html)


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


TODO
====
* Proper animated layout of icons when the app rotation changes - perhaps using [Quicksand](http://razorjack.net/quicksand/)
* Support for custom animations per page (data-animation="pop" perhaps?)
* Embedded video support
* Better picturenav swiping support
* Gallery support - possibly like icons but with thumbnailing
