$(document).ready(function(){
	tail_text = "";
});
function start_click() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "start_click"
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function stop_click() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "stop_click"
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function start_auto() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "start_auto"
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function stop_auto() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "stop_auto"
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function set_tail(tail) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "set_tail",
			tail : tail
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}

function get_tail_text() {
	console.log(tail_text);
	return tail_text;
}

function cache_tail(tail) {
	tail_text = tail;
}