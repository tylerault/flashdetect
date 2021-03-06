flashdetect
===========

Tiny (&lt;1K) Adobe Flash&#174; Player detection script distilled from SWFObject

Use
---

Include or load **flashdetect.min.js**, then call `getFlashVersion()`. This will always return a number:

* If the Flash Player plugin is installed, a number denoting the major and minor version is returned, e.g. `9.125` or `11.8`
* If no Flash Player is installed, `-1`

This usage allows for easy, clean evaluation, like so:

	<script src="js/flashdetect.min.js"></script>
	<script>
		if( getFlashVersion() >= 9.125 ){
			// Flash approach
		} else {
			// Non-Flash approach
		}
	</script>

AMD
---

If you roll with the cool kids and use a module loader like [requirejs](http://requirejs.org/), use the **flashdetect.amd.js** file. The closure will return a function, so you can just do:

	require( ['flashdetect.amd'], function(getFlashVersion){
		
		if( getFlashVersion() >= 9 ){
			// Go to town!
		}
		
	});


Objective
---------
The goal here is reliable and simple cross-browser Flash detection in as little code as possible.

### Reliabile:
The original detection code comes from [SWFObject](https://code.google.com/p/swfobject/), a Flash embedding library that's been thoroughly vetted and widely used for years. Really, the SWFObject contributors did most of the hard work here and deserve commensurate credit.

### Simple:
SWFObject's `getFlashPlayerVersion()` method returns an object with more detail than is usually needed. Flashdetect always returns a number, so you can more easily pop into an evaluation as described above.

### Small:
If you're not sure whether a browser supports Flash, you don't want to load a 10k+ (minified!) script just to find out. What's more, we use Flash in different ways than we used to: mostly for [polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) and enhancements like [ZeroClipboard](https://github.com/zeroclipboard/ZeroClipboard). These libraries tend to come with their own streamlined embedding code, and you may not want to load the polyfill unless you know it's supported.

The minified version of this script is about 600 bytes.


What's changed
--------------
Only the vital bits of SWFObject's original detection are retained. Here's what's changed:

* The 'release' number is gone (3rd value after major & minor versions).
* Detection via the object element for non-IE browsers is not carried over. See `testPlayerVersion()` in SWFObject's source for more info.
* Repeated references and Strings are abstracted to variables for better minification.
* 'undefined' and null tests are replaced with `!!`, since all the values are expected as objects.
* Regular expressions were consolodated.

