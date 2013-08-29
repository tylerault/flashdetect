/* Flash detection from SWFObject: code.google.com/p/swfobject
 * Released under the MIT License 
 * @returns a version number or -1 if no player
 */
var getFlashVersion = function() {
	
		var SW = "Shockwave",
			SHOCKWAVE_FLASH = SW + " Flash",
			SHOCKWAVE_FLASH_AX = SW+"Flash."+SW+"Flash",
			FLASH_MIME_TYPE = "application/x-shockwave-flash",
			undef = function(n){return (typeof n == 'undefined');},
			nav = navigator,
			parse = parseInt,
			plugins = nav.plugins,
			mimes = nav.mimeTypes,
			playerVersion = [0,0,0],
			d = null, a;
		if (!undef(plugins) && typeof plugins[SHOCKWAVE_FLASH] == "object") {
			d = plugins[SHOCKWAVE_FLASH].description;
			if (d && !(!undef(mimes) && mimes[FLASH_MIME_TYPE] && !mimes[FLASH_MIME_TYPE].enabledPlugin)) {
				d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				playerVersion[0] = parse(d.replace(/^(.*)\..*$/, "$1"));
				playerVersion[1] = parse(d.replace(/^.*\.(.*)\s.*$/, "$1"));
			}
		}
		else if ( !undef(window.ActiveXObject) ) {
			try {
				a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
				if (a) {
					d = a.GetVariable("$version");
					if (d) {
						d = d.split(" ")[1].split(",");
						playerVersion = [parse(d[0]), parse(d[1])];
					}
				}
			}
			catch(e) {}
		}
		a = playerVersion[0];
		return ( a > 0 ? parseFloat(a+'.'+playerVersion[1]) : -1 );
		
};