@echo off

node excell-to-json.js %1 %2 %3 %4 %5 %6 %7 %8 %9

if EXIST %9 echo 拖拽上来导出方式最多只支持9个。

@pause..