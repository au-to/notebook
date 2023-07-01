### veriog语言的基本结构

* 以关键字module开始，endmodule结束
* 区分大小写
* 关键字为小写
* 可以采用空格符
* 分号代表语句结束
* // ：单行注释
* /**/：多行注释
* 可以指定时序参数用于仿真

示例：

```
module module_name(port_list);
port declarations; // 端口声明
data type declarations; // 数据类型声明
circuit functionality; // 电路功能
timing specifications; // 时序参数
endmodule
```

### 数据类型

线网型：实际结构间的物理连接

* type：defination
* wire：代表一个节点或连接
* tri：代表一个三态节点
* supply0：逻辑0
* supply：逻辑1

变量型：存储临时数据的单元

* reg：任意宽度的无符号寄存器变量
* integer：有符号32位整形变量
* real、time、realtime：不可综合
* 只能在过程块procedure、任务块task、功能块function里赋值

### 数值表示

格式

* <size>'<base formate><number>：<多少位>'<进制数><数值>
* 默认为32位的十进制数

常用的数值表示方法

* 16‘d255：16位10进制数
* 8'h9a：8位16进制数
* ’b1010：32位2进制数
* ‘o21：32位8进制数
* 16s’hFA：有符号16位16进制数

负数的表示方法：负号放在位数前面

* -8‘d3：以2进制补码方式存储的8位负数

特殊数值

* ‘_'：增加可读性
* ’x‘：不定值；12’h12x
* ‘z'：高阻值；1’bz

parameter参数

* 赋值给一个象征性的名字，增强程序的可读性
* 在编译时必须是一个常量
* 模块实例化时可以重新赋值
* localparam：本地化的parameter参数，不可重新赋值

### 模块例化（调用模块）

格式

* <component_name>  #<delay>  <instance_name>  (port_list)
* component_name： 模块名，待例化的底层模块名称
* #delay：延时（可选）
* instance_name：例化名，不可重复
* port_list：该模块所包含的接口列表

### 例化模块的接口连接

按模块接口列表的顺序连接

* 按待例化模块接口列表的顺序连接
* 接口顺序必须保持一致

``` 
half_adder u1(c1,s1,a,b);
```

按接口名连接（推荐）

* 接口的连接根据接口信号名称进行
* 接口顺序可以与模块声明顺序不一致

``` 
half_adder u2(.a(s1),.b(cin),.sum(fsum),.co(c2));
```

### 运算符

### 算数运算符

* 操作数包含Z或X不定值，结果为X不定值
* 保存结果的变量位宽超过操作数，则进位bit值自动处理
* 保存结果的变量位宽与操作数相同，则进位bit值丢失

### 位运算符

* 对每一位进行操作
* 结果位宽为操作数中位宽最大的操作数位宽
* X或Z被认为不确定值，但结果可能为确定值
* 操作数位宽向左补齐

### 缩减运算符

* 运算结果为1-bit
* X or Z为不确定值，结果可能为确定值

### 关系运算符

* 大于，小于，等于

### 等式运算符

* 对等式和不等式来说，X or Z被确定为不确定值，结果也为不确定值

### 逻辑运算符

* ！
* &&
* || 

### 移位运算符

* 逻辑移位和算数移位
* <<  ,  >>

### 其它运算符

* ?:   条件判断
* {}：合并；``` ain = a'b010; bin = 3'110; {ain,bin} = 6'b010110```
* {{}}：复制；` {3{3'b101}} = 9'b101_101_101`

### 连续赋值

assign连续赋值用来描述组合逻辑电路

* LHSL：左操作数必须为线网类型数据
* 持续有效：当RHS发生变化时，左操作数立即更新值
* RHS操作数可以为线网型、寄存器型或function功能调用
* 可以在assign赋值添加Delay延时

``` 
示例：
wire[15:0] adder_out = mult_out + out;
wire[15:0] adder_out;
assign adder_out = mult_out + out;
assign #5 adder_out = mult_out + out;
```

