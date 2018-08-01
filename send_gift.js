function Gift(giftid, giftname, price, exp, bamboo) {
    return {
        "giftid" : giftid,
        "giftname" : giftname,
        "price" : price,
        "exp" : exp,
        "bamboo" : bamboo
    };
}

function User(token) {
    return {
        "token" : token
    };
}

function Room(hostid, hostname, roomid) {
    return {
        "hostid" : hostid, 
        "hostname" : hostname, 
        "roomid" : roomid
    }
}

function buildGiftUrl(userInfo, roomInfo, giftInfo) {
    var url = "https://mall.gate.panda.tv/ajax_gift_send"
    url += "?token=" + userInfo["token"]
    url += "&giftid=" + giftInfo["giftid"]
    url += "&giftname=" + encodeURI(giftInfo["giftname"])
    url += "&hostid=" + parseInt(roomInfo["hostid"])
    url += "&hostname=" + encodeURI(roomInfo["hostname"])
    url += "&giftcount=" + parseInt(1)
    url += "&price=" + parseInt(giftInfo["price"])
    url += "&total=" + parseInt(giftInfo["price"])
    url += "&roomid=" + parseInt(roomInfo["roomid"])
    url += "&bamboo=" + parseInt(giftInfo["bamboo"])
    url += "&exp" + parseFloat(giftInfo["exp"])
    url += "&range=&__plat=pc_web&_=" + parseInt(new Date().getTime())
    return url
}

function sendGift(userInfo, roomInfo, giftInfo, number) {
    var url = buildGiftUrl(userInfo, roomInfo, giftInfo)
    for (var i = 0; i < number; ++i) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function (result) {
                console.log(result);
            },
            error: function (e) {
                console.log("error");
            }
        });
    }
}

var userInfo = User("b827a8a5d7cd05b7716f7ee12d479ea7");
var roomInfo = Room(50710632, "Z丶词曲", 593983);

var giftMap = {
    // giftid, giftname, price, exp, bamboo
    // 星秀
    "比心" : Gift("5902f3cabfd0777265a48cf2", "比心", 1, 0.2, 3),
    "荧光棒" : Gift("59c4f13b3c74f33b04dc5840", "荧光棒", 5,  1, 15),
    "辣眼睛" : Gift("5a178e03ea3d18580cd82182", "辣眼睛", 5, 1, 15),
    "皮皮虾" : Gift("58ec6b7168b7641ac62c6f82", "皮皮虾", 29, 6, 90),
    "烤鱼" : Gift("56985731b868a87b4f0f9f9d", "烤鱼", 49, 10, 150),
    "爱心巧克力" : Gift("5a178f3bb5061c42f648a128", "爱心巧克力", 199, 40, 600),
    "玫瑰花" : Gift("59c4efc8b5061c7d30515cdf", "玫瑰花", 199, 40, 600),
    "帝王蟹" : Gift("5a178feeb5061c42f648a40b", "帝王蟹", 999, 210, 3000),
    "龙虾" : Gift("569857b5b868a87b4f0f9f9e", "龙虾", 999, 210, 3000),
    "佛跳墙" : Gift("56aefbeb84134616e02501ff", "佛跳墙", 9999, 2200, 30000),
    "光剑水晶" : Gift("5a38bd8a68b7644c9884f244", "光剑水晶", 10000, 2300, 30000),
    "光之碎片" : Gift("5a38bc9bea3d18032c95dbd3", "光之碎片", 2, 0.5, 6),

    "稳" : Gift("59008cc9bfd0777265a1b39d", "稳", 199, 40, 600),
    "？？？" : Gift("59008eec7a654474169cdf23", "？？？", 1, 0.2, 3),
    "666" : Gift("59008f433c74f35f06e6589a", "666", 1, 0.2, 3),
    "饭团" : Gift("569856ffb868a87b4f0f9f9c", "饭团", 2, 0.4, 6),

    // 炉石
    "无敌" : Gift("59956e15bfd07701628c2e41", "无敌", 66, 13.2, 199),
    "蜡烛" : Gift("5a2647e9c229ca0c8fa03e45", "蜡烛", 6, 1.2, 18),
    "乱斗之王" : Gift("58c9273cb5061c5f5798638b", "乱斗之王", 5, 1, 15),

    "网易UU" : Gift("5a1f7f36bfd077389b97a0f6", "网易UU", 10, 2, 30),

    // pandakill
    "影帝" : Gift("5a0bd327a0104355704be805", "影帝", 9999, 2200, 30000),
    "天秀" : Gift("5a0bd3c96fe56b38c3b9614a", "天秀", 999, 220, 3000), 
    "携程旅游" : Gift("5a0bd4187ff5ea4e0a89a136", "携程旅游", 1, 0.2, 3), 
    "官方狼人杀" : Gift("5a0bd4917ff5ea4e0a89a137", "官方狼人杀", 1, 0.2, 3),
    "博士伦" : Gift("5a0bd4ffa0104355704be806", "博士伦", 1, 0.2, 3),
    "艾格吃饱了" : Gift("5a0bd539bac10b6633a10bcf", "艾格吃饱了", 1, 0.2, 3), 

    // 狼人杀
    "玩吧小玩" : Gift("5940eb9dbfd0772f78a4b119", "玩吧小玩", 2, 0.4, 6),

    // 二次元
    "爱的小皮鞭" : Gift("5a1f75d4ea3d18580cfb8472", "爱的小皮鞭", 2999, 650, 9000), 
    "JK短裙" : Gift("59800aae7a65441b788b8d5c", "JK短裙", 999, 210, 3000), 
    "御守" : Gift("5a1fefd27a65444abfb00caf", "御守", 520, 104, 1560), 
    "猫爪布丁" : Gift("5a1f781e3c74f3048f298d7b", "猫爪布丁", 130, 26, 390), 
    "菠萝包" : Gift("59800a3b68b7647ce921cae0", "菠萝包", 49, 10, 150), 
    "泡面" : Gift("598009c4bfd0772dd78d7faf", "泡面", 29, 6, 90), 
    "基佬肥皂" : Gift("5a1feed1bfd077389b996afc", "基佬肥皂", 11, 2.2, 33), 
    "葱" : Gift("598009453c74f33495c9ef13", "葱", 2, 0.4, 6), 
    "打call" : Gift("59dd88461e761f029e19e3a3", "打call", 1, 0.2, 3), 

    // 美食
    "原谅帽" : Gift("5a65d7d93c74f312162b9eb6", "原谅帽", 99, 20, 300), 

    // 贴图
    "搞怪眼" : Gift("59e748f1c229ca23ae272bd8", "搞怪眼", 49, 10, 150), 
    "便便" : Gift("59e74847c229ca23ae272bd5", "便便", 99, 20, 300), 
    "花环" : Gift("59e74941c229ca23ae272bd9", "花环", 49, 10, 150), 

    // 绝地求生
    "98K" : Gift("59b0ffc5bfd077416f685514", "98K", 2, 0.4, 6), 
    "吃鸡" : Gift("594ce08e3c74f367067dd914", "吃鸡", 2, 0.4, 6), 
    "瞎" : Gift("5975a98e7a654418ec949e9a", "瞎", 1, 0.2, 3), 
    "菜" : Gift("593e735668b76402fa9cb6f6", "菜", 1, 0.2, 3), 
    // 大杂烩-影评专区
    "换碟" : Gift("5a0ee0bd68b7646b0d7f3778", "换碟", 1, 0.2, 3), 

    "气球" : Gift("59256709ea3d183da032d114", "气球", 2, 0.4, 6), // 二珂
    "创世神" : Gift("59256709ea3d183da032d114", "创世神", 2, 0.4, 6), // 2009
    "手榴弹" : Gift("5a17d228ea3d18580cd9246e", "手榴弹", 2, 0.4, 6), // 错觉
    "Boom" : Gift("5930cdc2bfd0777425d82018", "Boom", 2, 0.4, 6), // 若风
    "义薄云天" : Gift("5a5f2b2b68b7647adca0cc49", "义薄云天", 2, 0.4, 6), // 蓝战非
    "狗贼" : Gift("5a129b0568b7646b0d8ef553", "狗贼", 2, 0.4, 6), // 托马斯
    "就是混" : Gift("59718160bfd0771edc66deef", "就是混", 2, 0.4, 6), // toevor行云
    "口罩" : Gift("598836b3ea3d185951199ce6", "口罩", 1, 0.2, 3), // 口罩卡
    "高压锅" : Gift("5923d2c7bfd0771b686b72b3", "高压锅", 1, 0.2, 3), // 洪湖小肖户外打野
    "钢丝球" : Gift("5a129a5bbfd0776ddb44d6c8", "钢丝球", 2, 0.4, 6), // 剑网3 - 王者周公谨
    "36D" : Gift("5a43605ab5061c16513e4739", "36D", 2, 0.4, 6), // 小楼酱
    "雨家军" : Gift("59574d8f7a6544072a26cc61", "雨家军", 1, 0.2, 3), // 传奇专区 - 雨神、
    "影帝" : Gift("59ffdd17bfd0777125952727", "影帝", 1, 0.2, 3), // 户外 - 山东老张
    "柴犬" : Gift("59ffdd17bfd0777125952727", "柴犬", 2, 0.4, 6), // 绝地求生 - 可爱帅气的小绝
    "5.56" : Gift("5a17d40b7a65444abf8ba9d8", "5.56", 2, 0.4, 6), // 绝地求生 - 颜子轩丶




};
