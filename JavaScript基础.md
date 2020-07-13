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

