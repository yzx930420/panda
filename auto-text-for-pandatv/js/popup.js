$("#start-btn").click(function(){
	var text = $("#lrc-area").val();
	alert(text)
	chrome.extension.getBackgroundPage().start(text);
});
$("#startauto-btn").click(function(){
	var text = $("#lrc-area").val();
	chrome.extension.getBackgroundPage().start_auto(text);
});
$("#stop-btn").click(function(){
	chrome.extension.getBackgroundPage().stop();
});