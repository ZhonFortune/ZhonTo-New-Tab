// 定义 待办状态
var free = {
    id: "timefree",
    display: "不谎不忙",
    color: "#0FE431"
};var ease = {
    id: "timeease",
    display: "着手准备",
    color: "#FAC625"
};var urgent = {
    id: "timeurgent",
    display: "迫在眉睫",
    color: "#FA4925",
};
var due_status_list = [free, ease, urgent]
// import { moment } from "https://cdn.jsdelivr.net/npm/moment@2.30.1/moment.min.js"
// moment.locale("zh-cn")
// var nowtime = moment().formet("YYYY-MM-DD HH:mm:ss")
// console.log(nowtime)
// 
// 引入时间模块
import { nowtime_api } from "./time.js"
// nowtime_api 返回年月日时分秒
// nowtime.year 年份
// nowtime.month 月份
// nowtime.date 日期
// nowtime.hour 小时
// nowtime.minute 分钟
// nowtime.second 秒
// console.log(nowtime_api)
// 
// 读取参数并修改待办状态
var due_degree_sign = document.getElementsByClassName("due_body_content_degree_sign")[0]
var due_degree_text = document.getElementsByClassName("due_body_content_degree_text")[0]
var setduestatus = function (due_status) {
    for (var i = 0; i < due_status_list.length; i++) {
        if (due_status_list[i].id == due_status) {
           console.log(due_status_list[i].display)
           due_degree_sign.style.backgroundColor = due_status_list[i].color;
           due_degree_text.innerHTML = due_status_list[i].display;
           due_degree_text.style.color = due_status_list[i].color;
        }
    }
}
// 定义 待办类型
var Due_Class = {
    id: "Due_Class",
    title: "课程",
    maincolor: "#86A5D9"
}

// 点击待办卡片——确定 事件
var due_plate = document.getElementsByClassName("due_box")[0]
var due_comfire =  document.getElementsByClassName("due_body_bottom_button_box")[0]
due_comfire.onclick = function () {
    due_plate.style.marginRight = "-400px";
}