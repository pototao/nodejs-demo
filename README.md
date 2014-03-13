# nodejs 的一些小demo，还有小工具。

实验环境 win7_x64 + nodejs_v0.10.25

项目地址 [excell-to-json master](https://github.com/koalaylj/nodejs-demo/)  

如有问题可以到QQ群内讨论：223460081

## node 基本操作
	使用方式:
		1. 下载nodejs安装,配置环境变量 把node根目录放到path里面(windows上如果采用msi方式安装的话会自动设置)。
		2. cmd cd到工程相应目录 运行 node xxx.js 就能运行相应的demo。

## node basics
        1. 到basics目录下，可以试验最基本的例子。

## excell导json 工具
    * 三种使用方式：
		1. 到excell-to-json目录下，运行 node excell-to-json.js 就能将 /excell 目录下所有的excell文件都导出成json格式并存放到到/json目录里面了(同名覆盖)。下面两种可以让非技术让人员使用。
        2. 双击execell-to-json目录下的 export.bat 就能将 excell/目录下的所有 .xlsx文件都导出成json格式并存放到 /json目录下(同名覆盖)。
		3. 将excell文件放到 execell-to-json 根目录下，直接将*.xlsx文件(最多9个)拖拽到export.bat上，即可将这些文件直接导出成json存放在当前目录下。

	* 注意事项：
		1. excell文件必须是 *.xlsx格式(其实里面有支持*.xls的包，可以自己require('xls-to-json') 改动下让其同时支持两种格式)。
       	2. 必须有/json目录。·
		3. excell格式要求：必须只有一个sheet，而且必须在第一页，而且只能有一行表头，而且表头必须第一行，就酱。

    * json格式化工具：
        1. notepad++ ，安装json viewer插件。
        2. sublime text 安装json插件。
