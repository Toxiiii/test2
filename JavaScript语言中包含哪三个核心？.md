1. ### JavaScript语言中包含哪三个核心？

   1、ECMAScript：JavaScript的核心，描述了语言的基本语法(var、for、if、array等)和数据类型(数字、字符串、布尔、函数、对象(obj、[]、{}、null)、未定义)，ECMAScript是一套标准，定义了一种语言（比如JS）是什么样子。
   2、文档对象模型（DOM）：DOM（文档对象模型）是 HTML 和 XML 的应用程序接口（API）。DOM 将把整个页面规划成由节点层级构成的文档。HTML 或 XML 页面的每个部分都是一个节点的衍生物。请考虑下面的 HTML 页面：
   　

   ```
   　<html>
   
   　　<head>
   　　<title>Sample Page</title>
   　　</head>
   
   　　<body>
   
   　　<p>hello world!</p>
   
   　　</body>
   　　</html>
   ```

   　　这段代码可以用 DOM 绘制成一个节点层次图：
   DOM 通过创建树来表示文档，从而使开发者对文档的内容和结构具有空前的控制力。用 DOM API 可以轻松地删除、添加和替换节点（getElementById、childNodes、appendChild、 innerHTML）。
   3、浏览器对象模型（BOM）对浏览器窗口进行访问和操作。例如弹出新的浏览器窗口，移动、改变和关闭浏览器窗口，提供详细的网络浏览器信息（navigator object），详细的页面信息（location object），详细的用户屏幕分辨率的信息（screen object），对cookies的支持等等。BOM作为JavaScript的一部分并没有相关标准的支持，每一个浏览器都有自己的实现，虽然有一些非事实的标准，但还是给开发者带来一定的麻烦。

2. ### 在HTML中嵌入JavaScript语言的方式都有哪些？请给出样例代码

   ##### 第一种：内嵌式

   > JS代码可以以规定的格式嵌入到html页面的<html>,<head>,<body>不同的位置中，其中嵌入到<head>中时需要写一个入口函数，嵌入到另外两个位置则不需要。

   ###### 嵌入到<head>中

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
   	<meta charset="UTF-8">
   	<title>Document</title>
   	<script type="text/javascript">
   		// 入口函数  
   		window.onload()  
   		{JS代码}
   	</script>
   </head>
   <body>
   	
   </body>
   </html>
   ```

   ###### 嵌套到<html>中，一般放在</body>后面

   ```html
   </head>
   <body>
   </body>
   <script type="text/javascript">
   	JS代码
   </script>
   </html>
   ```

   ###### 放在<body>中

   ```html
   </head>
   <body>
   	<script type="text/javascript">
   	JS代码
   </script>
   </body>
   
   </html>
   ```

   ##### 第二种：外链式

   > 外链式在工作中是使用最频繁的一种方式，代码量较多时可以直接从外部导入JavaScrip文件，这种方式可以提高代码的阅读性和可复用性。

   ```html
   <script type="text/javascript" src=""></script>
   ```

   ##### 第三种：行间事件

   > 这种方式主要用于事件的简单操作之中，比如点击，鼠标移入，鼠标移除等，适合于JS代码较少时使用。

   ```html
   <input type="button" name="" id="" onclick="JS代码">
   ```

   

3. ### 请描述一下JavaScript脚本语言中的变量命名规则？

   必须遵守，不遵守会报错

   1. 由字母、数字、下划线、$符号组成，不能以数字开头
   2. 不能是关键字和保留字，例如：for、while。
   3. 区分大小写

   - 变量名必须有意义
   - 遵守驼峰命名法。
   - 首字母小写，后面的首字母需要大写。
   - 例如userName、userPassword。

4. ### JavaScript语言中有哪几种注释？

##### 单行注释

用来描述下面一个或多行代码的作用

```javascript
// 这是一个变量
var name = 'hm';
```

##### 多行注释

用来注释多条代码

```javascript
/*
var age = 18 ;
var name = 'Toxiii';
console.log(name,age);
*/
```



5. ### 请描述一下JavaScript的数据类型都有哪些？请给出定义样例代码

##### 简单数据类型

Number、String、Boolean、Undefined、Null

##### Number类型

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

##### String类型

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

##### Boolean类型

- Boolean字面量：true和false,区分大小写
- 计算机内部存储：true为1，false为0

##### Undefined和Null

1. undefined表示一个声明了没有赋值的变量，变量只声明的时候值默认是undefined
2. null表示一个空，变量的值如果想为null，必须手动设置

##### 复杂数据类型

object

##### 获取变量的类型

typeof

```javascript
var age = 18;
console.log(typeof age); //'number'
```

##### 字面量

在源代码中一个固定的表示法。

数值字面量：8,9,10

字符串字面量：“大前端”，‘我爱程序’

布尔字面量：true,false

6. #### 请使用样例描述一下值类型和引用类型的区别？

1.内存使用：基本数据类型直接存放在栈内存里。而引用类型则是，内容存放在堆内存，地址存放在栈内存，访问时通过栈内存的地址找到堆内存的内容。

2.变量赋值：基本数据类型是直接把值赋给变量。而引用类型是，把值的地址复制给新变量，通过地址再找到内容。

请列出在JavaScript语言中都有哪些类型数据转成布尔值时为false?

下面6种值转化为布尔值时为false，其他转化都为true

1、undefined（未定义，找不到值时出现）

2、null（代表空值）

3、false（布尔值的false，字符串"false"布尔值为true）

4、0（数字0，字符串"0"布尔值为true）

5、NaN（无法计算结果时出现，表示"非数值"；但是typeof NaN==="number"）

6、""（双引号）或''（单引号） （**空字符串，中间有空格时也是true**）

**注意空数组空对象，负值转的布尔值时都为true**

| 数据类型  | 转为true的值                 | 转为false的值  |
| --------- | ---------------------------- | -------------- |
| Boolean   | true                         | false          |
| String    | 任何非空字符串               | ''（空字符串） |
| Number    | 任何非零数字值（包括无穷大） | 0和NaN         |
| Object    | 任何对象                     | null           |
| Undefined | n/a                          | undefined      |

 

对于0, '', null, undefined, NaN，{}, [], Infinity求布尔值，分别是false false false false false true true true.

因此我们知道的一点是：对象的布尔值是true，即使是对象{}。

 

"!!"将表达式进行强制转化为bool值的运算，运算结果为true或者false。

例如 array=[1,2,3]   array.num=undefind  !array.num=true  !!array.num=false