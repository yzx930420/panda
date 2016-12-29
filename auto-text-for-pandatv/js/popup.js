$("#start-btn").click(function(){
	var text = $("#lrc-area").val();
	chrome.extension.getBackgroundPage().start(text);
});
$("#stop-btn").click(function(){
	chrome.extension.getBackgroundPage().stop();
});