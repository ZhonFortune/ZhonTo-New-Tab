// 定义各菜单JSON 已勾选与未勾选的颜色 及其事件
// 主页菜单
var home = {
    id: "home",
    onclick: function () {
        document.getElementById("home_svg").style.fill = "#5F4BB6"
    },
    offclick: function () {
        document.getElementById("home_svg").style.fill = "#202A25"
    },
    // 点击后隐藏课表
    active: function () {
        document.getElementsByClassName("time_box")[0].style.height = '25px'
        document.getElementsByClassName("classtable_box")[0].style.top = '120%'
    }
}
// 课表菜单
var classtable = {
    id: "classtable",
    onclick: function () {
        document.getElementById("classtable_svg").style.fill = "#5F4BB6"
    },
    offclick: function () {
        document.getElementById("classtable_svg").style.fill = "#202A25"
    },
    active: function () {
        document.getElementsByClassName("time_box")[0].style.height = '0px'
        document.getElementsByClassName("classtable_box")[0].style.top = '90px'
    }
}
// var ppt = {
//     id: "ppt",
//     onclick: function () {
//         document.getElementById("ppt_svg").style.fill = "#5F4BB6"
//     },
//     offclick: function () {
//         document.getElementById("ppt_svg").style.fill = "#202A25"
//     }
// }
var menus = [
    home,
    classtable,
    // ppt
]
// 点击函数
function menu_click(name) {
    for (var i = 0; i < menus.length; i++) {
        if (menus[i].id == name) {
            menus[i].onclick()
            menus[i].active()
        }
        else {
            menus[i].offclick()
        }
    }
}
document.getElementById("home").onclick = function () {
    menu_click("home")
}
document.getElementById("classtable").onclick = function () {
    menu_click("classtable")
}
// document.getElementById("ppt").onclick = function () {
//     menu_click("ppt")
// }