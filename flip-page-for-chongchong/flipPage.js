document.onkeydown=function(event) {
	if (event.keyCode == 39)
		document.getElementsByClassName("arrow-right")[0].click();
	if (event.keyCode == 37)
		document.getElementsByClassName('arrow-left')[0].click(); 
} 