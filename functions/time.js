var time_date = document.getElementsByClassName("time_date")[0]
var time_week = document.getElementsByClassName("time_week")[0]
var time_num = document.getElementsByClassName("time_num")[0]
function getTime() {
    var date = new Date()
    time_date.innerHTML = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日"
    time_week.innerHTML = "周" + "日一二三四五六".charAt(date.getDay())
    time_num.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}
getTime()
setInterval(getTime, 1000)
// 获取当前时间
var nowtime = new Date()
var nowtime_year = nowtime.getFullYear()
var nowtime_month = nowtime.getMonth() + 1
var nowtime_date = nowtime.getDate()
var nowtime_week = "周"+ "日一二三四五六".charAt(nowtime.getDay())
var nowtime_hour = nowtime.getHours()
var nowtime_minute = nowtime.getMinutes()
var nowtime_second = nowtime.getSeconds()
var nowtime_api = {nowtime_year, nowtime_month, nowtime_date, nowtime_hour, nowtime_minute, nowtime_second, nowtime_week}
export { nowtime_api }
export { nowtime_year, nowtime_month, nowtime_date, nowtime_hour, nowtime_minute, nowtime_second ,nowtime_week}

