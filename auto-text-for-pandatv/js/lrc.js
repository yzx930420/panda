chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	console.log("recv request");
	if (request.req == "start") {
		clearInterval(window.pid)
		console.log("stop:" + window.pid);
		window.pid = 0;

		console.log("text:" + request.text);
		window.lrc_array= request.text.split("\n");
		window.position = 0;
		window.pid = setInterval(function() {
			console.log("running check lrc, position:" + window.position + "  lrc_array len:" + window.lrc_array.length);
			if ($(".room-chat-texta").val()=="") {
				var lrc = window.lrc_array[window.position].trim();
				console.log("lrc:" + lrc);
				$(".room-chat-texta").val(lrc);
				window.position++;
			}
			if (window.position >= lrc_array.length) {
				clearInterval(window.pid);
				console.log("stop:" + window.pid);
				window.pid = 0;
			}
		}, 500);
		console.log("start:" + window.pid);
		sendResponse(window.pid);
	} else if (request.req == "stop") {
		clearInterval(window.pid);
		console.log("stop:" + window.pid);
		window.pid = 0;
	}
});

