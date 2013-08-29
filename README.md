flashdetect
===========

Small (&lt;1K) Adobe Flash&#174; Player detection script distilled from SWFObject

Use
---

Include or load the script, then call `getFlashVersion()`. This will always return a number:

* If the Flash Player plugin is installed, a number denoting the major and minor version is returned, e.g. `9.125` or `11.8`
* If no Flash Player is installed, `-1`

This usage allows for easy, clean evaluation, like so:
	if( getFlashVersion() >= 9.125 ){
		// Flash approach
	} else {
		// Non-Flash approach
	}

AMD
---

If you roll with the cool kids and use a module loader like [requirejs](http://requirejs.org/), use the *flashdetect.amd.js* file. The closure will return a function, so you can just do:

	require( ['flashdetect.amd'], function(getFlashVersion){
		
		if( getFlashVersion() >= 9 ){
			// Go to town!
		}
		
	});


Objective
---------
The goal here is reliable and simple cross-browser Flash detection in as little code as possible.

### Reliabile:
The original detection code comes from [SWFObject](https://code.google.com/p/swfobject/), a Flash embedding library that's been thoroughly vetted and widely used for years. Really, the SWFObject contributors did 99% of the work here and deserve all the credit.

### Simple:
SWFObject's `getFlashPlayerVersion()` method returns an object with more detail than is usually needed. Flashdetect always returns a number, so you can more easily pop into an evaluation as described above.

### Small:
If you're not sure whether a browser supports Flash, you don't want to load a 10k+ (minified!) script just to find out. What's more, we use Flash in different ways than we used to: mostly for [polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) and enhancements like [ZeroClipboard](https://github.com/zeroclipboard/ZeroClipboard). These libraries tend to come with their own streamlined embedding code, and you may not want to load the polyfill unless you know it's supported.

The minified version of this script is about 800 bytes.