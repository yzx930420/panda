function start(text) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "start",
			text : text
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function start_auto(text) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "start_auto",
			text : text
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function stop() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "stop"
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}