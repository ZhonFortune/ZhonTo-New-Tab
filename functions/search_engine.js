//定义 各搜索引擎json信息 
var bing = {
    name: "bing",
    url: "https://cn.bing.com/search?q=",
    default: function (){
        document.getElementById("bing").style.backgroundColor = "#FFFFFF";
        document.getElementById("bing_vector_1").style.fill = "#333333";
        document.getElementById("bing_vector_2").style.fill = "#000000";
    },
    click: function (){
        document.getElementById("bing").style.backgroundColor = "#86A5D9";
        document.getElementById("bing_vector_1").style.fill = "#FFFFFF";
        document.getElementById("bing_vector_2").style.fill = "rgb(238, 238, 238)";
    },
};
var baidu = {
    name: "baidu",
    url: "https://www.baidu.com/s?wd=",
    default: function (){
        document.getElementById("baidu").style.backgroundColor = "#FFFFFF";
        document.getElementById("baidu_vector_1").style.fill = "#2319DC";
        document.getElementById("baidu_vector_2").style.fill = "#FFFFFF";
    },
    click: function (){
        document.getElementById("baidu").style.backgroundColor = "#86A5D9";
        document.getElementById("baidu_vector_1").style.fill = "#FFFFFF";
        document.getElementById("baidu_vector_2").style.fill = "#2319DC";
    },
};
var tiktok = { 
    name: "tiktok",
    url: "https://www.douyin.com/search/",
    default: function (){
        document.getElementById("tiktok").style.backgroundColor = "#FFFFFF";
        document.getElementById("tiktok_vector").style.fill = "#000000";
    },
    click: function (){
        document.getElementById("tiktok").style.backgroundColor = "#86A5D9";
        document.getElementById("tiktok_vector").style.fill = "#FFFFFF";
    },
};
var bilibili = {
    name: "bilibili",
    url: "https://search.bilibili.com/all?keyword=",
    default: function (){
        document.getElementById("bilibili").style.backgroundColor = "#FFFFFF";
        document.getElementById("bilibili_vector").style.fill = "#000000";
    },
    click: function (){
        document.getElementById("bilibili").style.backgroundColor = "#86A5D9";
        document.getElementById("bilibili_vector").style.fill = "#FFFFFF";
    },
};
// 查询引擎
var engine_list = [bing,baidu,tiktok,bilibili];
var default_engine = bing;
var engine_url = bing.url;
function engine_click(engine,status){
    if (status == "default"){
        engine.default();
    }else if (status == "click"){
        engine.click();
        engine_url = engine.url;
    }else{
        console.log("error");
    }
}
// 选择引擎
default_engine.click();
document.getElementById("bing").onclick = function () {
    engine_click(engine_list[0],"click");
    engine_click(engine_list[1],"default");
    engine_click(engine_list[2],"default");
    engine_click(engine_list[3],"default");
}
document.getElementById("baidu").onclick = function () {
    engine_click(engine_list[0],"default");
    engine_click(engine_list[1],"click");
    engine_click(engine_list[2],"default");
    engine_click(engine_list[3],"default");
}
document.getElementById("tiktok").onclick = function () {
    engine_click(engine_list[0],"default");
    engine_click(engine_list[1],"default");
    engine_click(engine_list[2],"click");
    engine_click(engine_list[3],"default");
}
document.getElementById("bilibili").onclick = function () {
    engine_click(engine_list[0],"default");
    engine_click(engine_list[1],"default");
    engine_click(engine_list[2],"default");
    engine_click(engine_list[3],"click");
}
// URL跳转
var search_button = document.getElementsByClassName("search_input_button")[0];
var final_url = "";
var trunto = search_button.onclick = function () {
    var search_text = document.getElementsByName("search_text")[0].value;
    final_url = engine_url + search_text;
    window.open(final_url);
}
// 回车跳转
document.addEventListener("keydown",function(keyNum){
    if(keyNum.keyCode == 13){
        trunto();
    }
})