# ZhonTo New Tab 
课表JSON字段说明

![JSON](https://img.shields.io/badge/JSON-4CE4C0?logo=json) ![JSON_Version](https://img.shields.io/badge/24B7-white?label=json_version&labelColor=BBBBBB&color=76E019)


## 准备工作 :hammer_and_wrench:

<br>

### 创建JSON文件 :page_with_curl:

在项目根目录 <code>classtable</code> 文件夹下创建一个 <code>json</code> 文件,并将其命名为 <code>table.json</code> (文件名不可更改)

- - -
<br>

## JSON字段写入 :pencil2:
请根据JSON格式写入以下字段

<br>

### 字段版本 :page_with_curl:

项目中 <code>classtable.js</code> 文件会检索JSON字段中的 <code>json_version</code> 字段,根据其版本号写入课表

> [!TIP]
> 当前最新版本号为 ![JSON_Version](https://img.shields.io/badge/24B7-white?color=76E019)

```json
# 字段头
"json_version"
# 字段值
"24B7"
```
```json
# 完整字段
"json_version": "24B7"
```

<br>

### 学校信息 :page_with_curl:
该字段写入学校信息,包括学校名称、学校代码、二级学院、专业、专业代码、班级

> [!TIP]
> 该字段并不会被项目引用,仅当您与好友分享时查找准确的课表信息
> 因此该字段您可以留空,但请保留字段头与参数头

```json
# 字段头
"college_info"
# 参数头
"first" //学校名称
"fcode" //学校代码
"second" //二级学院
"major" //专业
"major_code" //专业代码
"class" //班级
```
```json
# 完整字段
"college_info": {
    "first": "",
    "fcode": "",
    "second": "",
    "major": "",
    "major_code": "",
    "class": ""
}
```

<br>

### 学期设置 :trolleybus:
该字段写入学期信息,包括学期开始时间、学期结束时间、持续周数

```json
# 字段头
"semester_set"
# 参数头
"start_time" //学期开始时间
"end_time" //学期结束时间
"week" //持续周数
```

> [!TIP]
> 该字段所有参数均为数组类型
> <code>"week"</code> 包含两个值 <code>week[0]</code> 必须为"1"
> <code>"start_time"</code> <code>"end_time"</code> 均包含三个值,从左至右依次为年份、月份、日期

```json
# 完整字段
"semester_set": {
    "week": ["1",""],
    "start_time": ["","",""],
    "end_time": ["","",""]
}
```

<br>

### 节数设置 :clock8: <a id="class_set"></a>
该字段写入课程节数信息

> [!TIP]
> 该字段所有参数均为数组类型,数组类型内为对象类型
> 每个对象包含两个参数: <code>start</code> <code>end</code>
> <code>start</code> 为该节开始时间
> <code>end</code> 为该节结束时间
> 该字段不固定长度
> 数组标识说明: <a id="class_set_numbersign"></a>
> 节数为数组当前数组标识 第%number节课为 <code>"class_set[%number-1]"</code>
> 如: <code>"class_set[0]"</code> 为第一节课
> <code>"class_set[1]"</code> 为第二节课

```json
# 字段头
"class_set":
# 参数头
"start" //开始时间
"end" //结束时间
```

```json
# 完整字段
"class_set": [
    {
        "start": "",
        "end": ""
    },{
        "start": "",
        "end": ""
    },{
        "start": "",
        "end": ""
    }
    ...
]
```

<br>

### 课程信息 :bar_chart:
该字段写入一周7天的课程信息,包括课程名称、课程地点、课程节数、课程老师、课程周数

> [!TIP]
> 该字段为对象类型,包含一周7天
> 单天为数组类型,数组内为对象类型
> 对象内包含课程名称、课程地点、课程节数、课程老师、课程周数

```json
# 字段头
"class_table"
# 参数头
"Monday" //周一
"Tuesday" //周二
"Wednesday" //周三
"Thursday" //周四
"Friday" //周五
"Saturday" //周六
"Sunday" //周日
# 对象参数头
"name" //课程名称
"location" //课程地点
"time_code" //课程节数
"teacher" //课程老师
"week" //课程周数
```
<br>

该字段相对复杂,请参考下方说明 (点击跳转)
[![class_name](https://img.shields.io/badge/name-课程名称-E0A419)](#class_name) | [![class_time](https://img.shields.io/badge/time__code-课程节数-E019B1)](#class_time) | [![class_location](https://img.shields.io/badge/location-课程地点-E05419)](#class_location) | [![class_teacher](https://img.shields.io/badge/teacher-课程老师-28CEDD)](#class_teacher) | [![class_week](https://img.shields.io/badge/week-课程周数-1940E0)](#class_week) | [![class_done](https://img.shields.io/badge/完整参数-28DD31)](#class_week)

<br>

#### 课程名称<a id="class_name"></a>

该字段为字符串类型,参数值请根据实际填写

```json
# 完整参数
"name": ""
```

<br>

#### 课程节数<a id="class_time"></a>

该字段为数组类型
数组内的值为[节数设置](#class_set)中的顺序值,若要填写时间段请完整填写完包含的所有节数
请根据实际填写

```json
# 完整参数
"time_code": []
```

示例
```json
# 课程在第1节 (项目将会读取 class_set[0]¹ 的数据)
"time_code": ["1"]

# 课程在第3节
"time_code": ["3"]

# 课程在第2节到第4节
"time_code": ["2", "3", "4"]

# 课程在第1节到第4节和第6节
"time_code": ["1", "2", "3", "4", "6"]
```

¹ [数组标识说明](#class_set_numbersign) > 读取 class_set[0] 的原因

#### 课程地点<a id="class_location"></a>

该字段为字符串类型,参数值请根据实际填写

```json
# 完整参数
"location": ""
```

<br>

#### 课程周数<a id="class_week"></a>

该字段为对象类型,对象内含有三个参数
分别为 周数类型、开始周数、结束周数

```json
# 对象参数头
"type" // 周数类型 | type参数的值可选 (其他值无效)
    -"continuous" // 连续
    -"custom" // 自定义

"start" // 开始周数
"end" // 结束周数
```

> [!TIP]
> 当type参数为 continuous 时, start 和 end 参数无效<br>需键入 "data" 参数 (详细请参考示例)
    

```json
# 完整参数
"week": {
    "type": "continuous",
    "start": "",
    "end": ""
}
```

示例
```json
# 课程为连续的 1 到 16 周
"week": {
    "type": "continuous",
    "start": "1",
    "end": "16"
}

# 课程为单周 (项目当前版本尚未提供odd和even值,所以请使用custom)
"week": {
    "type": "custom",
    "data": ["1", "3", "5", "7", "9", "11", "13", "15"]
}

# 课程为双周 (项目当前版本尚未提供odd和even值,所以请使用custom)
"week": {
    "type": "custom",
    "data": ["2", "4", "6", "8", "10", "12", "14", "16"]
}

# 课程为无序周
"week": {
    "type": "custom",
    "data": ["1","3","6","9","11","14","16"]
}
```

<br>

#### 完整参数<a id="class_done"></a>
```json
"class_table": {
    "Monday": [
        {
            "name": "",
            "time_code": [],
            "teacher": "",
            "location": "",
            "week": {
                "type": "continuous",
                "start": "",
                "end": ""
            }
        }
    ],
    "Tuesday": [
        {
            "name": "",
            "time_code": [],
            "teacher": "",
            "location": "",
            "week": {
                "type": "custom",
                "data": []
            }
        }
    ],
    "Wednesday": [
        {}
    ],
    "Thursday": [
        {}
    ],
    "Friday": [
        {}
    ],
    "Saturday": [
        {}
    ],
    "Sunday": [
        {}
    ]
}
```

- - -
<br>

## 完整预览 🤓:point_up:
如果您已经根据上面的说明填写了所有参数
那么恭喜你,你将获得一个完整的<code>table.json</code>文件

```json
{
    "json_version": "24B7",
    "college_info": {
        "first": "",
        "fcode": "",
        "second": "",
        "major": "",
        "major_code": "",
        "class": ""
    },
    "semester_set": {
        "week": ["1",""],
        "start_time": ["","",""],
        "end_time": ["","",""]
    },
    "class_set": [
        {
            "start": "",
            "end": ""
        },{
            "start": "",
            "end": ""
        },{
            "start": "",
            "end": ""
        },{
            "start": "",
            "end": ""
        },
        ...
    ],
    "class_table": {
        "Monday": [
            {
                "name": "",
                "time_code": [],
                "teacher": "",
                "location": "",
                "week": {
                    "type": "continuous",
                    "start": "",
                    "end": ""
                }
            }
        ],
        "Tuesday": [
            {
                "name": "",
                "time_code": [],
                "teacher": "",
                "location": "",
                "week": {
                    "type": "custom",
                    "data": []
                }
            }
        ],
        "Wednesday": [
            {}
        ],
        "Thursday": [
            {}
        ],
        "Friday": [
            {}
        ],
        "Saturday": [
            {}
        ],
        "Sunday": [
            {}
        ]
    }
}
```

<br>

如果您想看到具体的例子,请访问项目目录 <code>classtable</code> 文件夹中的 <code>example.json</code> 文件
[点击此处](../classtable/example.json) 快速预览<code>example.json</code>

<br><br>
