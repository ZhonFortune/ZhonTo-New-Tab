# ZhonTo New Tab

![HTML5](https://img.shields.io/badge/HTML-400000?logo=html5) ![CSS3](https://img.shields.io/badge/CSS3-5AF06E?logo=css3&color) ![Javascript](https://img.shields.io/badge/Javascript-F8A035?logo=Javascript) ![Version](https://img.shields.io/github/package-json/v/ZhonFortune/ZhonTo-New-Tab) ![License](https://img.shields.io/github/license/ZhonFortune/ZhonTo-New-Tab) ![platform](https://img.shields.io/badge/Platform-Desktop-01D7E2)

[快速开始](#usage) | [课表JSON](#classtable_json)
<br>
## 项目简介 :page_with_curl:
该项目创建了一个用于植入浏览器的全新标签页，本标签页以简介、简洁、美观为设计理念。其内置了<code>BiliBili</code> <code>Douyin</code> <code>Bing</code> <code>Baidu</code> 四大平台的搜索API，您只需轻点即可快速在各个平台进行搜索
该项目内置了课程表，并在搜索页中显示了课程卡片以便您快速知道您最近的下一次课程

> [!TIP]
> 课程表需要根据一定格式书写JSON文件

<br>

## 唠唠 :fire:
作者是大一新生,调剂变成土木老哥,所以这个项目基本是屎山代码,请轻喷 :sob:
如果遇到关于本项目的任何问题,欢迎提交 Issue 或联系我的邮箱(邮件请备注来意): zhonfortune@outlook.com 

<br>

## 幻想时间:D :cloud:
> 我是一名18岁的大一新生,而此时全世界编程能力下降100000倍,而我却能轻易的打出<code>printf("hello world")</code>. 此时我的导师得知后立刻丢掉了他手上咬了一半的![Mcdonalds](https://img.shields.io/badge/McDonalds-E20101?logo=McDonalds)跑到我面前对我说:"想不到我们这样小小的学校居然能遇到这样的人才" :D

<br>

## 环境说明 :hammer_and_wrench:
以下为运行该项目所需的依赖环境
```shell
# 拉取工具
Node.js : npm
# 依赖包
http-server
live-server
```

<br>

## 代码 :pencil2:
```shell
# Javascript
# html5
# css3
```

<br>

## 使用<a id="usage"></a> :link:
请根据以下步骤快速部署该项目

<br>

### 安装
```shell
# 安装至某个文件夹 : 在目标文件中打开终端执行命令
npm install zhonto-new-tab --save
```
```shell
# 安装至全局 : 在终端执行命令
npm install zhonto-new-tab -g
```

<br>

### 运行
```shell
# 在安装目录中打开终端执行命令
npm run server
npm run start
```
```shell
# 全局命令
zhonto-newtab
```
<br>

### 部署
由于当前主流浏览器已关闭自定义新标签页地址的功能,所以部署该项目需要借助浏览器插件.鉴于Google Chrome插件商店在国内无法正常访问,所以本项目暂时只提供<code>Chrome</code>浏览器插件的下载支持
<br>

<a href ="./library/New%20Tab%20Redirect%20Chrome%20Plugin_3_1_4.crx" download="./library/New%20Tab%20Redirect%20Chrome%20Plugin_3_1_4.crx">![Chrome Plugin](https://img.shields.io/badge/点此下载-4286F3?logo=google-chrome&logoColor=white)</a><br>
若您无法正常下载可在项目文件 <code>library</code> 中找到.rcx文件
关键词: <code>New Tab Redirect Chrome Plugin_3_1_4.rcx</code>

> [!TIP]
> 项目默认在本地IP: <code>localhost</code> <code>127.0.0.1</code> 上的<code>5080</code> 端口运行
> 如果需要更改端口,请修改<code>package.json</code>下的<code>server</code>字段

<br>

## JSON<a id="classtable_json"></a> :school:
此处为完整的 课程表JSON文件 实例<br>
[点击此处](./document/课表JSON格式@24B7.md) 查看详细JSON字段

```json
{
    "json_version": "24B7",
    "college_info": {
        "first": "天才大学",
        "fcode": "Genius University",
        "second": "计算机学院",
        "major": "天才专业",
        "major_code": "GM",
        "class": "2401"
    },
    "semester_set": {
        "week": ["1","20"],
        "start_time": ["2024","09","7"],
        "end_time": ["2025","01","18"]
    },
    "class_set": [
        {
            "start": "08:00",
            "end": "08:45"
        },{
            "start": "08:55",
            "end": "09:40"
        },{
            "start": "10:00",
            "end": "10:45"
        },{
            "start": "10:55",
            "end": "11:40"
        },{
            "start": "14:30",
            "end": "15:15"
        },{
            "start": "15:25",
            "end": "16:10"
        },{
            "start": "16:20",
            "end": "17:05"
        },{
            "start": "17:15",
            "end": "18:00"
        },{
            "start": "19:30",
            "end": "20:15"
        },{
            "start": "20:25",
            "end": "21:10"
        },{
            "start": "21:20",
            "end": "22:05"
        }
    ],
    "class_table": {
        "Monday": [
            {
                "name": "高等数学 I",
                "time_code": ["1","2"],
                "location": "天才大楼A-101",
                "teacher": "天才老师",
                "week": {
                    "type": "continuous",
                    "start": "4",
                    "end": "17"
                }
            },{
                "name": "思想道德与法治",
                "time_code": ["5","6","7"],
                "location": "天才大楼A-102",
                "teacher": "天才老师",
                "week": {
                    "type": "continuous",
                    "start": "1",
                    "end": "16"
                }
            }
        ],
        "Tuesday": [
            {
                "name": "高等数学 I",
                "time_code": ["3","4"],
                "location": "天才大楼A-101",
                "teacher": "天才老师",
                "week": {
                    "type": "continuous",
                    "start": "4",
                    "end": "17"
                }
            },{
                "name": "体育课",
                "time_code": ["5","6"],
                "location": "体育馆",
                "teacher": "",
                "week": {
                    "type": "continuous",
                    "start": "1",
                    "end": "20"
                }
            }
        ],
        "Wednesday": [
            {
                "name": "大学英语(一)",
                "time_code": ["1","2","3"],
                "location": "天才大楼A-501",
                "teacher": "天才老师",
                "week": {
                    "type": "continuous",
                    "start": "1",
                    "end": "16"
                }
            }
        ],
        "Thursday": [
            {
                "name": "不知道写什么好了",
                "time_code": ["5","6","7"],
                "location": "天才大楼A-501",
                "teacher": "天才老师",
                "week": {
                    "type": "continuous",
                    "start": "4",
                    "end": "14"
                }
            }
        ],
        "Friday": [
            {
                "name": "这是一节课",
                "time_code": ["5","6"],
                "location": "天才大楼A-301",
                "teacher": "天才老师",
                "week": {
                    "type": "custom",
                    "data": ["5","7","8","9","10","11","15","17"]
                }
            }
        ],
        "Saturday": [],
        "Sunday": []
    }
}
```

<br>

## 更新日志

[点击此处](./document/update.md) 查看完整更新日志