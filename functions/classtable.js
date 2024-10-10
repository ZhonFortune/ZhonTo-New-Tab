// 当点击课表菜单后进行一次加载
// 单次页面刷新前仅加载一次避免性能问题
// 
// load_check用于检测是否加载过 0表示未加载 1表示已加载
import { nowtime_week } from "./time.js";
var load_check = 0;
var main = document.getElementById("classtable")
// 新建行 函数
var week_list = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
function addElement(E_id) {
    var class_box = document.getElementsByClassName("classtable_class_box")[0]
    // 添加行到classtable_class_box中
    var new_line = document.createElement("div")
    new_line.className = "classtable_class_line"
    new_line.id = "class_line_" + E_id
    class_box.insertAdjacentElement("beforeend", new_line)
    // 添加头到行中
    var new_head_box = document.createElement("div")
    new_head_box.className = "classtable_classnumt_start_box"
    new_line.insertAdjacentElement("beforeend", new_head_box)
    var new_head = document.createElement("div")
    new_head.className = "classtable_classnumt"
    new_head.id = "Line_" + E_id + "_head"
    new_head_box.insertAdjacentElement("beforeend", new_head)
    var new_head_h1 = document.createElement("h1")
    var new_head_p = document.createElement("p")
    new_head.insertAdjacentElement("beforeend", new_head_h1)
    new_head.insertAdjacentElement("beforeend", new_head_p)
    // 添加周目课表到行中
    for (var w = 0; w < 7; w++) {
        var new_class_box = document.createElement("div")
        new_class_box.className = "classtable_classweeknum_box"
        new_line.insertAdjacentElement("beforeend", new_class_box)
        var new_class = document.createElement("div")
        new_class.className = "classtable_classweeknum"
        new_class.id = "Line_" + E_id + "_" + week_list[w]
        new_class_box.insertAdjacentElement("beforeend", new_class)
        // 将h1标签添加至各周目课表中 用于显示.name
        var new_class_h1 = document.createElement("h1")
        document.getElementById("Line_" + E_id + "_" + week_list[w]).insertAdjacentElement("beforeend", new_class_h1)
        // 将h2标签添加至各周目课表中 用于显示.teacher
        var new_class_h2 = document.createElement("h2")
        document.getElementById("Line_" + E_id + "_" + week_list[w]).insertAdjacentElement("beforeend", new_class_h2)
        // 将p标签添加至各周目课表中 用于显示.location
        var new_class_p = document.createElement("p")
        document.getElementById("Line_" + E_id + "_" + week_list[w]).insertAdjacentElement("beforeend", new_class_p)

    }
    // 添加尾部留空到行中
    var new_end = document.createElement("div")
    new_end.className = "classtable_classnumt_end_box"
    new_end.id = "Line_" + E_id + "_end"
    new_line.insertAdjacentElement("beforeend", new_end)
}
// 定义行周目课程 盒子背景颜色变量JSON
var classtable_classweeknum_box_bgcolor = [
    // "#FB8C8C", "#FBB28C", "#FBD18C", "#FBF78C", "#D6FB8C", "#ACFB8C", "#8CFB8F", "#8CFBB9", "#8CFBD7", "#8CFBF5",
    // "#8CE6FB", "#8CD7FB", "#8CC0FB", "#8CB5FB", "#8CB5FB", "#8C9EFB", "#8C8FFB", "#A48CFB", "#B08CFB", "#BF8CFB",
    // "#DA8CFB", "#ED8CFB", "#FB8CEB", "#FB8CD1", "#FB8CB6", "#FB8CA7", "#FB8C9B", "#FF7E7E"
    "#202A25"
    // "#877BBA"
]
main.addEventListener("click", function () {
    // console.log("课表菜单被点击")
    if (load_check == 0) {
        // 将load_check设为1表示已加载
        load_check = 1;
        // 读取JSON文件
        var json_url = "./classtable/table.json"
        var json_request = new XMLHttpRequest()
        json_request.open("GET", json_url)
        json_request.send(null)
        json_request.onload = function () {
            if (json_request.status == 200) {
                // 读取成功后读取JSON版本号
                if (JSON.parse(json_request.responseText).json_version == "24B7") {
                    var table_data = JSON.parse(json_request.responseText)
                    // 调试代码
                    // console.log(table_data)
                    // 循环添加i+1行 最后一行顶排版 不传数据
                    for (var i = 0; i < table_data.class_set.length + 1; i++) {
                        // console.log(table_data.class_set[i])
                        // 添加课表行并区分其颜色
                        var e = i + 1
                        if (i % 2 == 0) {
                            addElement(e);

                        } else {
                            addElement(e);
                            document.getElementById("class_line_" + e).style.backgroundColor = "#F8F8F8";
                        } if (i == table_data.class_set.length + 1) {
                            addElement(e);
                            document.getElementById("class_line_" + e).style.backgroundColor = "unset";
                            document.getElementById("class_line_" + e).style.marginTop = "30px";

                        }
                    }
                    // 循环添加课程行头
                    for (var i = 0; i < table_data.class_set.length; i++) {
                        var e = i + 1;
                        // 调试代码
                        // console.log(table_data.class_set[i].start)
                        document.querySelector("#Line_" + e + "_head h1").innerText = "第" + e + "节课";
                        document.querySelector("#Line_" + e + "_head p").innerText = table_data.class_set[i].start + " - " + table_data.class_set[i].end;
                    }
                    // 循环写入课程
                    // ID: line_
                    let $week_list_de = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                    var week_list_cn = [ "周一", "周二", "周三", "周四", "周五", "周六","周日"]
                    for (var p = 0; p < $week_list_de.length; p++) {
                        // console.log(week_list_de[p],week_list_de.length)
                        // console.log(table_data.class_table[$week_list_de[p]].length)
                        // 遍历各天课程数量
                        for (var i = 0; i < JSON.parse(table_data.class_table[$week_list_de[p]].length); i++) {
                            // 设置随机数以显示统一背景颜色
                            // console.log(table_data.class_table[$week_list_de[p]][i])
                            var random_bgcolor = classtable_classweeknum_box_bgcolor[Math.floor(Math.random() * classtable_classweeknum_box_bgcolor.length)];
                            // 遍历当天各课程节数
                            for (var j = 0; j < table_data.class_table[$week_list_de[p]][i].time_code.length; j++) {
                                // 修改颜色 
                                // console.log("#Line_" + table_data.class_table[$week_list_de[p]][i].time_code[j] + "_" + week_list[p])
                                // console.log(week_list[p], nowtime_week)
                                if (week_list_cn[p] == nowtime_week) {
                                    // 高亮今日表头
                                    document.querySelector("#class_header_" + week_list[p] + " h1").style.color = "#5F4BB6"
                                    // 高亮今日课程
                                    document.querySelector("#Line_" + table_data.class_table[$week_list_de[p]][i].time_code[j] + "_" + week_list[p]).style.backgroundColor = "#877BBA"
                                }else {
                                    document.querySelector("#Line_" + table_data.class_table[$week_list_de[p]][i].time_code[j] + "_" + week_list[p]).style.backgroundColor = random_bgcolor
                                }
                                // h1: 课程名
                                // h2: 老师
                                // p: 课程地点
                                document.querySelector("#Line_" + table_data.class_table[$week_list_de[p]][i].time_code[j] + "_" + week_list[p] + " h1").innerHTML = table_data.class_table[$week_list_de[p]][i].name;
                                document.querySelector("#Line_" + table_data.class_table[$week_list_de[p]][i].time_code[j] + "_" + week_list[p] + " h2").innerHTML = table_data.class_table[$week_list_de[p]][i].teacher;
                                document.querySelector("#Line_" + table_data.class_table[$week_list_de[p]][i].time_code[j] + "_" + week_list[p] + " p").innerHTML = table_data.class_table[$week_list_de[p]][i].location;
                            }
                        }
                    }
                } else {
                    console.log("未知的JSON版本号")
                }
            } else {
                // 读取失败则输出错误信息
                console.log("读取失败")
            }
        }
    } else {
        // 如果已经加载过则不进行任何操作
    }
})