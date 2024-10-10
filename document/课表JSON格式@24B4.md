#### 课表标准化JSON 格式说明<a id="top"></a>
—— ZhonTo 个人导航页

---

##### 前言
本项目为使用者提供了可自定义的课表以添加课表提醒,该Markdown文件为其提供了课表JSON的标准化写法说明。使其能够被正常读取
<br>
<br>

##### JSON版本
JSON版本固定了课表JSON的标准化格式，不同版本的JSON写法可能存在误差。当前JSON的版本号为<code>24B4</code>，本MD也以<code>24B4</code>版本为例。

```
"json_version": "24B4"
```
<br>
<br>

##### 学校与班级信息
学校与班级信息为课表JSON的必要信息，用于区分不同学校、班级的课表。便于您与社区其他人分享。

以嘉应学院为例,在<code>college_info</code>下，您需要填写<code>嘉应大学</code>的名称在<code>first</code>中，将<code>JYU</code>填写在<code>fcode</code>中；接着您还需要将二级院校<code>土木工程学院</code>填写在<code>second</code>中；将您的主修课程<code>工程管理</code>输入在<code>major</code>参数中；再将助学专业的代码（你可以自行自定义输入）<code>BM</code>填写在<code>major_code</code>中；最后将您所在的班级<code>2405</code>填写在<code>class</code>中。当然，你的这些信息可以是非真实的（您也可以留空），因为这只是便于您分享出去。当您设置好所以<code>college_info</code>参数后，您的JSON应该如下所示：

```
    "college_info": {
        "first": "嘉应学院",
        "fcode": "JYU",
        "second": "土木工程学院",
        "major": "工程管理",
        "major_code": "BM",
        "class": "2405"
    }
```
<br>
<br>

##### 学期设置
学期设置是课表JSON的必要信息，用于设置上课开始，持续以及结束的时间。在<code>24B4</code>版本中，其头参数为<code>semester_set</code>，其中应包含<code>week</code>，<code>start_time</code>，<code>end_time</code>参数，需要您按照您的实际课表如实填写。

<code>week</code>参数为<code>["1","20"]</code>，表示从第1周到第20周，您可以根据您的实际情况进行修改。
<code>start_time</code>参数为<code>["2024","09","7"]</code>，表示从2024年9月7日开始，您可以根据您的实际情况进行修改。
<code>end_time</code>参数为<code>["2025","01","18"]</code>，表示到2025年1月18日结束，您可以根据您的实际情况进行修改。

当您设置好所以<code>semester_set</code>参数后，您的JSON应该如下所示：
```
    "semester_set": {
        "week": ["1","20"],
        "start_time": ["2024","09","7"],
        "end_time": ["2025","01","18"]
    }
```
<br>
<br>

##### 课时设置 <a id="class_set"></a>
课时设置是课表JSON的必要信息，用于设置一天的课程数量以及每节课上下课时间。在<code>24B4</code>版本中，其头参数为<code>class_set</code>。该参数的长度并没有限制，但必须按照数组格式书写。JSON长度按照您的实际课程数逐一编写。且头参数名没有要求，但必须要和[课表设置](#class_table)中各数组下对象里[课程时间](#class_table_time_code)中的参数名一致。

以嘉应大学为例，其一天有11节课。
第一节课上课为<code>08:00</code>，下课为<code>08:45</code>
第二节课上课为<code>08:55</code>，下课为<code>09:40</code>
第三节课上课为<code>10:00</code>，下课为<code>10:45</code>
第四节课上课为<code>10:55</code>，下课为<code>11:40</code>
第五节课上课为<code>14:30</code>，下课为<code>15:15</code>
第六节课上课为<code>15:25</code>，下课为<code>16:10</code>
第七节课上课为<code>16:20</code>，下课为<code>17:05</code>
第八节课上课为<code>17:15</code>，下课为<code>18:00</code>
第九节课上课为<code>19:30</code>，下课为<code>20:15</code>
第十节课上课为<code>20:25</code>，下课为<code>21:10</code>
第十一节课上课为<code>21:20</code>，下课为<code>22:05</code>

当您设置好所以<code>class_set</code>参数后，您的JSON应该如下所示：
```
    "class_set": [
        {
            "1": {
                "start": "08:00",
                "end": "08:45"
            }
        },{
            "2": {
                "start": "08:55",
                "end": "09:40"
            }
        },{
            "3": {
                "start": "10:00",
                "end": "10:45"
            }
        },{
            "4": {
                "start": "10:55",
                "end": "11:40"
            }
        },{
            "5": {
                "start": "14:30",
                "end": "15:15"
            }
        },{
            "6": {
                "start": "15:25",
                "end": "16:10"
            }
        },
        {
            "7": {
                "start": "16:20",
                "end": "17:05"
            }
        },
        {
            "8": {
                "start": "17:15",
                "end": "18:00"
            }
        },
        {
            "9": {
                "start": "19:30",
                "end": "20:15"
            }
        },
        {
            "10": {
                "start": "20:25",
                "end": "21:10"
            }
        },
        {
            "11": {
            "start": "21:20",
            "end": "22:05"
            }
        }
    ]
```
<br>
<br>

##### 课表设置<a id="class_table"></a>
在<code>24B4</code>版本中，课表参数头为<code>class_table</code>，其中包含一周七天的课程设置。

即<code>Monday</code>,<code>Tuesday</code>,<code>Wednesday</code>,<code>Thursday</code>,<code>Friday</code>,<code>Saturday</code>,<code>Sunday</code>参数，每个参数为一个数组，数组中每个元素为一个对象，对象应包含课程名称、课程地点、课程老师、课程周数。

>课程名称：该参数定义了课程名称，例如高等数学、线性代数等。

>课程时间：该参数定义了课程时间，如第一节，第二节等。【该参数特殊，往下会有[详细说明](#class_table_time_code)】

>课程地点：该参数定义了课程地点，例如A栋701等。

>课程老师：该参数定义了课程老师，例如张三、李四等。

>课程周数：该参数定义了哪些周目需要上课，例如1-16周、1-8周、9-16周等。【该参数特殊，往下会有[详细说明](#class_table_weeks)】

以下为各参数代码：
```
课程名称: name
课程时间: time_code
课程地点: location
课程老师: teacher
课程周数: weeks
```
<br>

###### *课程时间*<a id="class_table_time_code"></a>
课程时间参数为一个数组，数组中每一个元素为先前<code>class_set</code>参数即[课时设置](#class_set)中各对象的值，您可以[返回上方](#class_set)查看<code>class_set</code>参数标准格式。根据其<code>class_set</code>中的值填入课程时间参数<code>time_code</code>以表达该课程所持续的节数。

例如，如果某课程为第<code>1</code>节，则<code>time_code</code>参数为<code>"1"</code>
```
"time_code": "1"
```
如果某课程为第<code>1</code>节至第<code>2</code>节，则<code>time_code</code>参数为<code>["1","2"]</code>
```
"time_code": ["1","2"]
```
以此类推

<br>

###### *课程周数* <a id="class_table_weeks"></a>
课程周数参数为一个数组，数组中应包含周数类型<code>type</code>，开始周数<code>start</code>、结束周数<code>end</code>或数据<code>data</code>参数

<code>type</code>参数可键入以下值：
```
continuous //连续
custom //自定义
```
在<code>24B4</code>版本中<code>type</code>参数并无提供<code>odd</code>或<code>even</code>值，若需要设置单双周数请将<code>type</code>参数设置为<code>custom</code>后手动键入周数
<br>
!当<code>type</code>参数为<code>continuous</code>时，应设置<code>start</code>参数和<code>end</code>参数，例如：
```
"weeks": {
    "type": "continuous",
    "start": "1",
    "end": "16"
}
```
!当<code>type</code>参数为<code>custom</code>时，则不需要<code>start</code>参数和<code>end</code>参数，而是键入<code>data</code>参数，注意<code>data</code>参数键入时为数组对象，例如：
```
"weeks": {
    "type": "custom",
    "data": ["1","3","5","7","9","11","13","15"]
}
```
<br>

若您已根据上述说明调整<code>time_code</code>和<code>weeks</code>参数，则您的JSON格式课表（示例）应如下所示：
```
    {
    "json_version": "24B4",
    "college_info": {
        "first": "嘉应学院",
        "fcode": "JYU",
        "second": "土木工程学院",
        "major": "工商管理",
        "major_code": "BM",
        "class": "2405"
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
                "name": "管理学原理",
                "time_code": ["1","2"],
                "location": "公颜实训大楼- C508",
                "teacher": "吕赞",
                "week": {
                    "type": "continuous",
                    "start": "4",
                    "end": "17"
                }
            },{
                "name": "思想道德与法治",
                "time_code": ["5","6","7"],
                "location": "公颜实训大楼- C404",
                "teacher": "黄芹",
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
                "location": "公颜实训大楼- C414",
                "teacher": "李志平",
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
                "location": "公颜实训大楼- C506",
                "teacher": "李冬梅",
                "week": {
                    "type": "continuous",
                    "start": "1",
                    "end": "16"
                }
            }
        ],
        "Thursday": [
            {
                "name": "高等数学 I",
                "time_code": ["1","2"],
                "location": "公颜实训大楼- C416",
                "teacher": "李志平",
                "week": {
                    "type": "continuous",
                    "start": "4",
                    "end": "17"
                }
            }
        ],
        "Friday": [
            {
                "name": "建设工程管理概论",
                "time_code": ["3","4"],
                "location": "田家炳师范学院- 617",
                "teacher": "赵亚歌白",
                "week": {
                    "type": "custom",
                    "data": ["4","5","7","8","9","10","11","15"]
                }
            },{
                "name": "管理学原理",
                "time_code": ["5","6"],
                "location": "公颜实训大楼- B203",
                "teacher": "吕赞",
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

---
[回到顶部](#top)