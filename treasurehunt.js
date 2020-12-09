/*
treasurehunt.js
Leeds XR (c) 2020
All Rights Reserved
*/

window.onload = function(){
	//if not a https connection force a https connection
	if (location.protocol !== 'https:') {
		location.replace(`https:${location.href.substring(location.protocol.length)}`);
	}
}