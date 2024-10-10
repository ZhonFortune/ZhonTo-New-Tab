## ZhonTo New Tab

### 关于项目

这是一个由大一新生开发的新标签页项目,其内置了<code>BiliBili,Douyin,Baidu,Bing</code>的快捷搜索方式<br>
并在其中添加了课程表功能，搜索页中会创建课程卡片以显示你接下来最近的一节课程。
您可以通过创建JSON文件来添加自己的课程表,您可以[点击此处](./document/课表JSON格式@24B4.md)来查看<code>ZhonTo New Tab 项目的 课程表标准化JSON 书写说明文件</code><br>
>注意：请根据markdown文件中的JSON版本书写JSON文件，否则将无法正确读取课程表

<Br>

### 安装项目
#### | 拉取项目
>该项目依赖<code>http-server</code>工具用于本地运行

目前改项目提供了<code>npm</code>工具安装方式
使用以下命令安装项目
```
npm install -g zhonto-newtab 
```
#### | 运行项目
安装完成后，使用以下命令运行项目
```
npm run zt-newtab
```
#### | 项目预览
项目运行后，您可以在默认URL<code>http://localhost:5080</code>预览项目，您也可以通过修改<code>package.json</code>文件来配置项目端口
#### | 项目配置
由于当前各大浏览器已关闭自定义新标签页地址，因此配置自定义标签页到浏览器需要借助插件(由于google关闭了在国内的插件商店,当前仅提供<code>Chrome</code>浏览器的插件下载)

[点此下载<code>Plugin: [Chrome]New Tab Redirect</code>](./library/New%20Tab%20Redirect%20Chrome插件_3_1_4_.crx)

### 项目更新

[点此查看项目更新日志](./document/update.md)



