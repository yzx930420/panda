
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	console.log("recv request:" + request.req);
	if (request.req == "send_click") {
		console.log("send_click")
	}
});
