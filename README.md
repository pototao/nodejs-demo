nodejs 的一些小demo，还有小工具。

实验环境 win7_x64 + nodejs_v0.10.25

如有问题可以到QQ群内讨论：223460081

## node basics
	使用方式:
		1. 下载nodejs.msi 安装,配置环境变量 把node根目录放到path里面。
		2. cmd cd到工程目录 运行 node xxx.js 就能运行相应的demo。

## excell导json
		1. 运行 node excell-to-json.js 就能将 /res 目录下所有的excell文件都导出到/json目录里面了(同名覆盖)。
		2. excell文件要求：必须是 *.xlsx格式。必须有/json目录。
		3. excell格式要求：必须只有一个sheet，而且必须在第一页，而且只能有一行表头，而且表头必须第一行，就酱。