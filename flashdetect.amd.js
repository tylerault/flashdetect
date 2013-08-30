/* Flash detection from SWFObject: code.google.com/p/swfobject
 * Released under the MIT License 
 * @returns a version number or -1 if no player
 */
(function(){
var getFlashVersion = function() {
	
		var SW = "Shockwave",
			FLASH = "Flash",
			SHOCKWAVE_FLASH = SW + " " + FLASH,
			SHOCKWAVE_FLASH_AX = SW+FLASH+"."+SW+FLASH,
			FLASH_MIME_TYPE = "application/x-shockwave-flash",
			nav = navigator,
			plugins = nav.plugins,
			mimes = nav.mimeTypes,
			d = null, a;
		if (!!plugins && typeof plugins[SHOCKWAVE_FLASH] == "object") {
			d = plugins[SHOCKWAVE_FLASH].description;
			if (d && !(!!mimes && !!mimes[FLASH_MIME_TYPE] && !mimes[FLASH_MIME_TYPE].enabledPlugin)) {
				return parseFloat( d.replace(/^.*\s+(\S+)\s+\S+$/, "$1") );
			}
		}
		else if ( !!window.ActiveXObject ) {
			try {
				a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
				if (a) {
					d = a.GetVariable("$version");
					if (d) {
						return parseFloat(d.replace(/^\S+\s+(\d+),(\d+).*$/i,'$1.$2'));
					}
				}
			}
			catch(e) {}
		}
		return -1;
		
},

wrapper = function(){ return getFlashVersion; };

if( !!define ){
	define( wrapper );
} else {
	return wrapper;
}

})();