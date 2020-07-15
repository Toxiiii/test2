# JavaScript基础

HTML和CSS

## 网页、网站和应用

网页：单独的一个页面

网站：一些列相关的页面组成到一起

应用程序：可以和用户产生交互，并实现某种功能

## 变量

### 什么是变量

#### 1.变量

 计算机内存中储存数据的标识符，根据变量名称可以获取到内存中储存的数据。

#### 2.为什么要使用变量

使用变量可以方便的获取或者修改内存中的数据。

### 如何使用变量

#### var声明变量

`var age`

#### 变量的赋值

#### 变量的命名规则和规范

##### 规则

###### 必须遵守，不遵守会报错

1. 由字母、数字、下划线、$符号组成，不能以数字开头
2. 不能是关键字和保留字，例如：for、while。
3. 区分大小写

- 变量名必须有意义
- 遵守驼峰命名法。
- 首字母小写，后面的首字母需要大写。
- 例如userName、userPassword。

## JavaScript数据类型

### 简单数据类型

Number、String、Boolean、Undefined、Null

#### Number类型

- 数值字面量：数值的固定值的表示法

110 1024 60.5

- 进制

```
十进制
	var num = 9;
	进行算数计算时，八进制和十六进制表示数值最终都将被转换成十进制数值。
十六进制
	var num = 0xA;
	数字序列范围：0~9以及A~F
	A 10  B 11  C 12  D 13  E 14  F 15
八进制	
	var num1 = 07; //对于十进制的7
	var num2 = 019; //对应十进制的19
	var num3 = 08; //对应十进制的8
	数字序列范围：0~7
	如果字面值中的数值超出了范围，那么前导零将被忽略，后面的数值将被当做十进制数值解析。
```

- 浮点数
  - 浮点数的精度问题

```
浮点数
	var n = 5e-324; //科学计数法 5乘以10的-324次方
浮点数值的最高精度是17位小数，但在进行算术计算时其精确度不如整数。
	var result = 0.1 +0.2; //结果不是0.3，而是0.3000000000000004
	console.log(0.07*100)
	不要判断两个浮点数是否相等
```

- 数值范围

```
最小值：Number.MIN_VALUE,这个值为：5e-324 
最大值：Number.MAX_VALUE，这个值为：1.7976931348623157e+308
无穷大：Infinity
无穷小：-Infinity
```

- 数值判断
  - NaN：not a number
    - Nan与任何值都不相等，包括它本身
  - isNaN:is not a number

#### String类型

- 字符串字面量
- 转义符

\n 换行

\t	制表

\b	空格

\r	回车

\f	进纸

\\\	斜杠

\\'  单引号

\\" 双引号

\xnn 以十六进制代码nn表示的一个字符

\unnnn 以十六进制代码nnnn表示的一个Unicode字符

- 字符串拼接

```javascript
console.log(11 + 11);
console.log('hello' + 'world');
console.log('11' + 11);
console.log('male' + ture);
```

#### Boolean类型

- Boolean字面量：true和false,区分大小写
- 计算机内部存储：true为1，false为0

#### Undefined和Null

1. undefined表示一个声明了没有赋值的变量，变量只声明的时候值默认是undefined
2. null表示一个空，变量的值如果想为null，必须手动设置

### 复杂数据类型

object

### 获取变量的类型

typeof

```javascript
var age = 18;
console.log(typeof age); //'number'
```

### 字面量

在源代码中一个固定的表示法。

数值字面量：8,9,10

字符串字面量：“大前端”，‘我爱程序’

布尔字面量：true,false

### 注释

#### 单行注释

用来描述下面一个或多行代码的作用

```javascript
// 这是一个变量
var name = 'hm';
```

#### 多行注释

用来注释多条代码

```javascript
/*
var age = 18 ;
var name = 'Toxiii';
console.log(name,age);
*/
```

------

> # 714

### 数据类型转换

如何使用谷歌浏览器，快速查看数据类型？

字符串的颜色是黑色，数值类型是蓝色的，布尔类型也是蓝色的，undefined和null是灰色的

#### 转换成字符串类型

- toString()

```javascript
var num = 5;
console.log(num.toString())
```

- String()

```
String()函数存在的意义：有些值没有toString()，这个时候可以使用String（）。比如：undefined和Null
```

#### 转换成数值类型

- Number（）

```
Number（）可以吧任意值转换成数值，如果转换的字符串中有一个不是数值的字符，返回NaN
```

- parseInt()

```
var num1 = parseInt("12.3abc");  //返回12，如果第一个字符是数字会解析直到遇到非数字结果
var num2 = parseInt("abc123");  //返回NaN，如果第一个字符不是数字或者符号就会返回NaN
```

- parseFloat()

```
parseFloat()把字符串转换成浮点数
parseFloat()和parseInt非常相似，不同之处在与
	parseFloat会解析第一个，遇到第二个，或者非数字结束
	如果解析的内容只有证书，解析成整数
```

- +，-0等运算

```
var str = '500';
console.log(+str);  //取正
console.log(-str);  // 取负
console.log(str - 0);
```

#### 转换成布尔类型

- Boolean()

0"(空字符串) null undefined NaN 会转换成false

其他都会换成true

5种情况转换成false

### 操作符

运算符 operator

5 + 6

表达式 组成 由操作数和操作符，会有一个结果返回

#### 算术运算符

```
+ - * / % 3%2
```

#### 一元运算符

一元运算符：只有一个操作数的运算符

5 + 6 两个操作数的运算符 二元运算符

++：自身加一

--：自身减一

- 前置++
  - 自身加一

```javascript
var num1 = 5;
++ num1;

var num2 =6;
console.log(num1 + ++ num2);
```

- 后置++
  - 后置++ 执行顺序是先返回表达式结果Num然后再对自身加1

```javascript
var num1 = 5;
num1 ++;
```



#### 逻辑运算符(布尔运算符)

```
&&与 两个操作数同时为true，结果为true，否则都是false
|| 或 两个操作数有一个为true，结果都为true，否则为false
！ 非 取反
```

#### 关系运算符（比较运算符）

```
< > >= <=  比较大小
== 等于  判断变量的值是否相等
!=不等于  
=== 相等判断  先判断类型是否一致，在判断值
!== 不等
```

```javascript
==与===的区别：==只有进行值得比较，===类型和值同时相等，则相等

var result = '55' ==55; //true
var result = '55' === 55; //false值相等，类型不相等
var result = 55 === 55;  //true
```

#### 运算符的优先级

```
优先级从高到低
	1.（）优先级最高
	2.一元运算符 ++ -- ！
	3.算术运算符 先* / % 后+ -
	4.关系运算符 > >= < <+
	5.相等运算符 == != === !==
	6.逻辑运算符 先%% 后||
```

练习

```javascript
//练习1：
4 >=6 \\ '人' ='阿凡达' && !(12*2 == 144) && true
//简化
（4>=6）||('人' != '阿凡达')&&（！（12*2 == 144
//练习2：
var num = 10;
5 == num / 2 && (2 + 2 * num).tostring() === '22'
```





# 0715

### 表达式和语句

#### 表达式

> 一个表达式可以产生一个值，有可能是运算、函数调用、有可能是字面量。表达式可以放在任何需要值得地方。

#### 语句

> 语句可以理解为一个行为，循环语句和判断语句就是典型的语句
>
> 一个程序有很多个语句组成，一般情况下分割一个一个的语句

### 流程控制

> 程序的三种基本结构

#### 顺序结构

从上到下执行的代码就是顺序结构

*程序默认就是由上到下的顺序执行的*

```
s=>start:开始
e=>end:结束
op1=>operation:语句1
op2=>operation:语句2

s->op1->op2->e
```



> 开始
>
> ↓
>
> 语句1
>
> ↓
>
> 语句2
>
> ↓
>
> 结束

####  分支结构

根据不同的情况，执行对应代码



![未命名文件(3)](C:\Users\62792\Desktop\未命名文件(3).png)

##### if语句

语法结构

```javascript
if(/*条件表达式*/) {
	//执行语句
}

if (/*条件表达式*/) {
	//成立执行语句
}
else {
	//否则执行语句
}

if(/*条件1*/) {
	//成立执行语句
}
else if (/*条件2*/) {
	//成立执行语句
}
else if (/*条件3*/) {
	//成立执行语句
}
else {
	//最后默认执行语句
}

```

案例

```javascript
求两个数的最大数
var num1 = 2;
var num2 = 5;
if (num1>num2) {
	console.log('num1:' + num1);
}
else {
	console.log('num2:' + num2);
}


判断一个数是偶数还是技奇数
var num1 = 5;
if (num1 % 2 === 0) {
	console.log('num1是偶数');
} 
else {
	console.log('num1是奇数');
}


分数转换，把百分之转换成ABCDE <60 E 60-70 D 70-80 C 80-90 B 90-100 A
var score = 90;
		if (score >= 90 && score <= 100 ) {
			console.log('A');
		}
		else if (score  <90 && score >= 80 ) {
			console.log('B');
		}
		else if (score >=70 && score < 80 ) {
			console.log('C');
		}
		else if (score >=60 && score < 70 ) {
			console.log('D');
		}
		else {
			console.log('E');
		}
```

##### 三元运算符

> 表达式1 ？ 表达式2 ：表达式3
>
> *表达式1 布尔类型的表达式  返回的是一个布尔类型*
>
> 当表达式1成立 返回表达式2的值
>
> 当表达式1不成立 返回表达式3的值
>
> 是对if....else语句的一种简化写法

案例

```javascript
是否满18岁
var num1 = 3;
var num2 = 6;
//表达式1 ？ 表达式2 ： 表达式3
console.log( num1 > num2 ? num1 : num2);
或者是
var max = num1 > num2 ? num1 : num2 ;


从两个书中找到最大值

判断一个年龄是否成年，当年龄超过18 返回 成年 否则返回未成年
```

##### switch语句

语法格式

```
switch(expression) {
	case 常量1：
	语句：
	break;
	case 常量2：
	break;
	case 常量3：
	break；
...
	case 常量n：
	语句；
	break；
	default：
	语句；
	
}
```



#### 循环结构

重复的做一件事

![未命名文件(4)](C:\Users\62792\Desktop\未命名文件(4).png)