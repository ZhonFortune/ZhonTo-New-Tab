// 消息提示框组件
// type类型: suc(成功) err(失败) warn(警告)
function message(text,type) {
    // 成功状态
    var Default = {
        level: "def",
        color: "#202A25",
        return: "def"
    }
    var success = {
        level: "suc",
        color: "#0FE431",
        return: "suc"
    }
    var error = {
        level: "err",
        color: "#FA4925",
        return: "err"
    }
    var warning = {
        level: "warn",
        color: "#FAC625",
        return: "warn"
    }
    var type_list = [success,error,warning]
    var message = document.getElementsByClassName("header_message")[0]
    var message_text = document.querySelector(".header_message h1")
    for (var i = 0; i < type_list.length; i++) {
        if (type == type_list[i].level) {
            // console.log(type_list[i].level)
            message.style.backgroundColor = type_list[i].color
            message.title = type_list[i].return
            message_text.innerHTML = text
            // 检索条件后退出循环避免过度内存占用
        }
        else {
            // console.log("Not Found Level")
        }
    }
    message.addEventListener("click",function () {
        message.style.backgroundColor = Default.color
        message_text.innerHTML = "暂无消息提示"
    })
}
// 导出组件
export {
    message
}