$(document).ready(function(){
});

function start_click() {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		console.log(tabs[0].id);
		req = {
			req : "send_click"
		};
		chrome.tabs.sendRequest(tabs[0].id, req);
	});
}