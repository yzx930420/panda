// $(".room-chat-messages").delegate(".room-chat-send-gift", "click", function() {
// 	$(".room-chat-texta").val("感谢" + this.innertext);
// });
// $(".room-chat-messages").delegate(".room-chat-send-bamboo", "click", function() {
// 	$(".room-chat-texta").val("感谢" + $(this).data("name") + "赠送的竹子");
// });

// $(".room-chat-messages").undelegate(".room-chat-send-gift", "click");
// $(".room-chat-messages").undelegate(".room-chat-send-bamboo", "click");

window.tail = "";

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	console.log("recv request:" + request.req);
	if (request.req == "start_click") {
		$(".room-chat-messages").delegate(".room-chat-send-gift", "click", function() {
			$(".room-chat-texta").val("感谢" + this.innerText);
			$(".room-chat-send").click();
		});
		$(".room-chat-messages").delegate(".room-chat-send-bamboo", "click", function() {
			$(".room-chat-texta").val("感谢" + $(this).data("name") + " 的奶粉钱(竹子)");
			$(".room-chat-send").click();
		});
	} else if (request.req == "stop_click") {
		$(".room-chat-messages").undelegate(".room-chat-send-gift", "click");
		$(".room-chat-messages").undelegate(".room-chat-send-bamboo", "click");
	} else if (request.req == "start_auto") {
		clearInterval(window.auto_thanks_pid);
		window.thanks_array = Array();
		window.gifts_map = {};
		window.auto_thanks_pid = setInterval(function() {
			// var gift_li = $(".room-chat-send-gift:not(.old)").addClass("now");
			var gift_infos = $(".gift-info");
			var bamboo_li = $(".room-chat-send-bamboo:not(.old)").addClass("now");
			var text = "";
			// console.log("gift size:" + gift_li.size());
			if (bamboo_li.size() > 0)
				console.log("bamboo size:" + bamboo_li.size());
			var now = (new Date()).getTime() / 1000;
			for (gift in gifts_map) {
				var ts = gifts_map[gift];
				if (now - ts > 5) {
					console.log("delete:" + gift);
					window.thanks_array.push(gift);
					delete gifts_map[gift];
				}
			}

			gift_infos.each(function(){
				var temp = "感谢 " + this.children[0].innerText + " 赠送的" + this.children[1].innerText.substr(2);
				window.gifts_map[temp] = now;
			});

			// gift_li.each(function() {
			// 	var temp = "感谢" + $(this.children[0]).data("name") + "赠送的";
			// 	temp += this.children[1].innerText;
			// 	window.gifts_map[temp] = now;
			// });

			bamboo_li.each(function() {
				var temp = "感谢 " + $(this).data("name") + " 赠送的竹子";
				window.gifts_map[temp] = now;
			});

			// gift_li.removeClass("now").addClass("old");
			bamboo_li.removeClass("now").addClass("old");
			if ($(".room-chat-texta").val() == "") {
				var temp = window.thanks_array.shift();
				if (temp != undefined) {
					temp += window.tail;
					$(".room-chat-texta").val(temp);
				}

			} 
			re = new RegExp("^感谢(.+)赠送的(.+)$");
			if (re.test($(".room-chat-texta").val())) {
				$(".room-chat-send").click();
			}
			if (window.thanks_array.length > 0)
				console.log("thanks_array length:" + window.thanks_array.length);
		}, 500);
		console.log("start auto thanks:" + window.auto_thanks_pid);
	} else if (request.req == "stop_auto") {
		clearInterval(window.auto_thanks_pid);
		console.log("stop auto thanks:" + window.auto_thanks_pid);
		window.auto_thanks_pid = 0;
	} else if (request.req == "set_tail") {
		window.tail = request.tail;
		console.log("设置小尾巴：" + window.tail);
	}
});

