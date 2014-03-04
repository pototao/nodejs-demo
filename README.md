nodejs 的一些小demo，还有小工具。

实验环境 win7_x64 + nodejs_v0.10.25

## 1. node basics
	* 使用方式:
		+ 下载nodejs.msi 安装,配置环境变量 把node根目录放到path里面。
		+ cmd cd到工程目录 运行 node xxx.js 就能运行相应的demo。

	* excell导json
		+ 运行 node excell-to-json.js 就能将 /res 目录下所有的excell文件都导出到/json目录里面了(同名覆盖)。
		+ excell文件要求：必须是 *.xlsx格式。必须有/json目录。
		+ excell格式要求：必须只有一个sheet，而且必须在第一页，而且只能有一行表头，而且表头必须第一行，就酱。