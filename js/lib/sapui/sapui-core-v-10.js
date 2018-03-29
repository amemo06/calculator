// All common functions do configure modules

"use strict";

/*var com = {}; // declare object 
com["sapui"] = {
*/

window["com"] = {};
/*
com["sapui"] = { v:10 };
 */
// we create an alias '$' com.for sapui
var $= com.sapui = { v:10 };
 
//com["sapui"].initStructure = function(libPath, version) {
$.initStructure = function(libPath, version) {	
	var root = window;
	var structure = libPath.split(".")
	for(var i = 0; i< structure.length; i++)
	{
		root[structure[i]] = root[structure[i]] || {};
		root = root[structure[i]];
	}
	root.v = version;
}; 

$.loadfiles = function()
{
var filePaths = [ //"js/lib/sapui-core-v-10.js", 
				"js/lib/calculator/calculator-core-v-02.js",
				"js/lib/calculator/calculator-events-v-02.js"]	
	for(var i=0;i<filePaths.length;i++)
	{
		var script = document.createElement('script')
		script.src = filePaths[i];
		document.write(script.outerHTML);
	}
}
$.loadfiles2 = function(filePaths){
	for(var i=0;i<filePaths.length;i++)
	{
		var script = document.createElement('script')
		script.src = filePaths[i];
		document.write(script.outerHTML);
	}
}
$.loadfile = function(filePath){
		var script = document.createElement('script')
		script.src = filePath;
		document.write(script.outerHTML);
}
$.initconf = function()
{
	for(var modulenb=0; modulenb<conf.modules.length; modulenb++)		
	{
		var curmodule = conf.modules[modulenb];
		if (curmodule.active)
		{
			for(var srcnb=0;  srcnb<curmodule.src.length;srcnb++)
			{
				var filePath;
				filePath = curmodule.rootpath + curmodule.src[srcnb];
				$.loadfile(filePath);
			}
		}
	}
}
$.initconf();

//$.loadfiles()

