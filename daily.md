## 0713

### Symbol 值的强制类型转换？

#### String（）转换

```
虽然说上面说不可以转换，其实只能转换成'Symbol(uid)'这种形式，想取到'描述内容'需要手动截取'描述内容'

let uid = Symbol.for("uid"), // 创建全局私有属性
    test = Symbol('呵呵哒'), // 创建局部私有属性
    desc = String(uid), // 转换成字符串
    testString = String(test) // 转换成字符串


console.log(desc)    // "Symbol(uid)"
console.log(testString)    // "Symbol(呵呵哒)"
```

#### 强制类型转换

```
将'uid'与'空字符串'相连接，会首先要求把'uid'转换为一个'字符串'，而这会引发错误，从而阻止了转换行为。



let uid = Symbol.for("uid"),
    desc = uid + ""; // 引发错误！
```

#### Symbol转换成数字

```
相似地，你不能将'Symbol'转换为数值，对'Symbol'使用所有数学运算符都会引发错误，例如：



let uid = Symbol.for("uid"),
    sum = uid / 1; // 引发错误！



此例试图把'Symbol'除以 1 ，同样引发了错误。无论对'Symbol'使用哪种数学运算符都会'导致错误'，但使用

逻辑运算符则不会，因为'Symbol'在'逻辑运算中会被认为等价于true'（就像 JS 中其他的非空值那样）。
```



##0712

###1. 什么情况下会发生布尔值的隐式强制类型转换？
1. 数字运算：
`​“＋”：将表达式的值转换为String（仅当有一个是String类型）；<br />“－”：将表达式的值转换为Number;`
2. “.”
  被隐式转换为对象；

3. “if语句”
  判断的条件表达式会被隐式转换为Boolean类型

4. “＝＝”
JS的非严格匹配时，会进行隐式类型转换



###2. || 和 && 操作符的返回值？
#每日一练

4.27

\1. DOCTYPE 的作用是什么？

浏览器解析，相当于声明。

\2. 标准模式与兼容模式各有什么区别？

标准模式：排版等用最高标准运行

兼容模式：模拟老浏览器的行为防止站点崩。 

\3. HTML5 为什么只需要写 <!DOCTYPE HTML>，而不需要引入 DTD？

不基于标准通用标记语言。 

\4. SGML 、 HTML 、XML 和 XHTML 的区别？

SGML 定义电子文档和内容描述的标准。DTD 标准是SGML 的一部分。

XML 是SGML 的子集，优化版。

HTML 是遵循了 DTD 标准的 SGML 的文档，也可以说是 SGML 的一个实例。

XHTML 是遵循了XML标准的 HTML 文档。

---

\6. 行内元素定义

inline-level行内元素又称内联元素，不占有独立的区域，仅靠自身的字体大小和图像尺寸来支撑结构，一般不可以设置宽度、高度、对齐等属性，常用于控制页面中文本的样式。

常用的行内元素：<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>等。

\7. 块级元素定义

block-level，块级元素会独自占一行或者多整行，可以对其设置宽高、对齐等属性，常用于网页布局和网页结构的搭建。

常见的块元素有<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>等。

\8. 行内元素与块级元素的区别？

块级元素的特点：
（1）从新行开始
（2）高度，行高、外边距以及内边距都可以控制。
（3）宽度默认是容器的100%
（4）可以容纳内联元素和其他块元素。

---

行内元素的特点：
（1）和相邻行内元素在一行上。
（2）高、宽无效，但水平方向的padding和margin可以设置，垂直方向的无效。
（3）默认宽度就是它本身内容的宽度。
（4）行内元素只能容纳文本或则其他行内元素。

\9. HTML5 元素的分类

结构性元素 级块元素 行内语义性元素 交互性元素 四大类

\10. 空元素定义

在HTML元素中，没有内容的 HTML 元素被称为空元素。

---

\11. link 标签定义

文档与外部资源之间的关系，大多数时候都用来连接样式表。

\12. 页面导入样式时，使用 link 和 @import 有什么区别？

（1） link是XHTML标签，除了加载CSSS之外，知还可以定义RSS等其他事务，@import属于CSS范畴，只道能加载CSS

（2）link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入后才可以加载

（3）link是XHTML标签，无兼容问题，@import是在CSS2.1提出的版，低版本的权浏览器不支持

（4）link支持使用JS控制DOM改变样式，而@import不支持

\13. 你对浏览器的理解？

是一种用于检索并展示万维网信息资源的应用程序。这些信息资源可为网页、图片、影音或其他内容，它们由统一资源标志符标志，信息资源中的超链接可使用户方便地浏览相关信息。

\14. 介绍一下你对浏览器内核的理解？

浏览器内核又可以分成两部分：渲染引擎(layout engineer 或者 Rendering Engine)和 JS 引擎。
渲染引擎 它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
JS 引擎 则是解析 Javascript 语言，执行 javascript语言来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。有一个网页标准计划小组制作了一个 ACID 来测试引擎的兼容性和性能。内核的种类很多，如加上没什么人使用的非商业的免费内核，可能会有10多种，但是常见的浏览器内核可以分这四种：Trident、Gecko、Blink、Webkit。

\15. 常见的浏览器内核比较

（1）Trident(IE内核) 

国内很多的双核浏览器的其中一核便是 Trident，"兼容模式"。

代表： IE、傲游、世界之窗浏览器、Avant、腾讯TT、猎豹安全浏览器、360极速浏览器、百度浏览器等。

Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML。

（2）Gecko(firefox) 

Gecko(Firefox 内核)： Mozilla FireFox(火狐浏览器) 采用该内核，Gecko 的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。 

（3） webkit(Safari)  

 Safari 是苹果公司开发的浏览器，所用浏览器内核的名称是大名鼎鼎的 WebKit。

 代表浏览器：傲游浏览器3、 Apple Safari (Win/Mac/iPhone/iPad)、Symbian手机浏览器、Android 默认浏览器，

（4） Chromium/Bink(chrome) 

   在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。 

     大部分国产浏览器最新版都采用Blink内核。

（5） Presto(Opera) 

  Presto 是挪威产浏览器 opera 的 "前任" 内核，为何说是 "前任"，因为最新的 opera 浏览器早已将之抛弃从而投入到了谷歌怀抱了。

---

\16. 常见浏览器所用内核

Trident内核：IE，360，搜过浏览器；

Gecko内核：Netscape6及以上版本，

Presto内核：Opera

Blink内核：Opera；

Webkit内核：Safari，Chrome

\17. 浏览器的渲染原理？

·浏览器将获取的HTML文档并解析成DOM树。

·处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)。

·将DOM和CSSOM合并为渲染树(rendering tree)将会被创建，代表一系列将被渲染的对象。

·渲染树的每个元素包含的内容都是计算过的，它被称之为布局layout。浏览器使用一种流式处理的方法，只需要一次pass绘制操作就可以布局所有的元素。

·将渲染树的各个节点绘制到屏幕上，这一步被称为绘制painting.

\18. 渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程）

1. 浏览器下载HTML文件并开始解析DOM。
2. 遇到样式表文件link[rel=stylesheet]时，将其加入资源文件下载队列，继续解析DOM。
3. 遇到脚本文件时，暂停DOM解析并立即下载脚本文件。
4. 下载结束后立即执行脚本，在脚本中可访问当前``以上的DOM。
5. 脚本执行结束，继续解析DOM。
6. 整个DOM解析完成，触发DOMContentLoaded事件。

\19. async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）

async 和 defer 的作用

- async：async 属性标注的脚本是异步脚本，即异步下载脚本时，不会阻塞文档解析，但是一旦下载完成后，立即执行，阻塞文档解析。
- defer 属性标注的脚本是延迟脚本，使得浏览器延迟脚本的执行，也就是说，脚本会被异步下载但是不会被执行，直到文档的载入和解析完成，并可以操作，脚本才会被执行。

有什么区别？？

正常情况下的``浏览器读到它，就会被执行，并且阻碍下边代码的执行。。

- 用了async：不会阻碍文档的解析，但是一旦加载了就会立即执行，不能保证执行的顺序，因为async的脚本执行顺序是没有保证的，因此要确认脚本间没有依赖关系。
- 用了defer ：读到了，也不会立即执行，要等文档都读取完毕，再去执行。

两者的相同点

- 加载文件时不阻塞页面渲染。
- 对于inline的script无效。
- 使用这两个属性的脚本中不能调用document.write方法。
- 有脚本的onload的事件回调。

\20. 什么是文档的预解析？（浏览器解析过程）

预解析：在当前作用域下, JS 代码执行之前，浏览器会默认把带有 var 和 function 声明的变量在内存中进行提前声明或者定义。

代码执行：从上到下执行 JS 语句。

---

HTML5 有哪些新特性、移除了那些元素？

增强了图形渲染、影音、数据存储、多任务处理等处理能力主要表现在：

增强了图形渲染、影音、数据存储、多任务处理等处理能力主要表现在

1) 绘画 canvas;

类似windows自带的画图板，可绘制线、框、路径、图……，InternetExplorer 9、Firefox、Opera、Chrome 以及 Safari 支持 <canvas> 及其属性和方法。

画图需要的要素

a)  笔，用笔可以画线、圆、矩形、文本等

b)  颜色

c)  画板

由于画布案例比较多，代码比较复杂，请看视频学习http://www.chuanke.com/3885380-190205.html 

2) 本地离线存储 localStorage

长期存储数据，浏览器关闭后数据不丢失;

1.特点

数据永久存储，没有时间限制；大小限制5M(够用了)；只存储字符串。

2.数据存取方式



1. 
   localStorage.a = 3;//设置a为"3"
2. 
   localStorage["a"] = "sfsf";//设置a为"sfsf"，覆盖上面的值
3. 
   localStorage.setItem("b","isaac");//设置b为"isaac"
4. 
   var a1 = localStorage["a"];//获取a的值
5. 
   var a2 = localStorage.a;//获取a的值
6. 
   var b = localStorage.getItem("b");//获取b的值
7. 
   var b2= localStorage.key(0);//获取第一个key的内容
8. 
   localStorage.removeItem("c");//清除c的值
9. 
   localStorage.clear();//清除所有的数据



推荐使用：

getItem()

setItem()

removeItem()

3.事件监听



1. 
   if(window.addEventListener){
2. 
   window.addEventListener("storage",handle_storage,false);//
3. 
   }else if(window.attachEvent){ //兼容IE
4. 
   window.attachEvent("onstorage",handle_storage);
5. 
   }
6. 
   function handle_storage(e){
7. 
   }



对象e为localStorage对象，Chrome、Firefox支持差，IE支持较好。

3) sessionStorage的数据在浏览器关闭后自动删除;操作参考localStorage

4) 用于媒介回放的 video和 audio 元素;

5) 语意化更好的内容元素，比如article、footer、header、nav、section;

6) 表单控件，calendar、date、time、email、url、search;

7) 新的技术webworker(专用线程)

8) websocketsocket通信

9) Geolocation 地理定位

（二）移除的元素

纯表现的元素



- <basefont> 默认字体，不设置字体，以此渲染
- <font> 字体标签
- <center> 水平居中
- <u> 下划线
- <big> 大字体
- <strike> 中横线
- <tt> 文本等宽



框架集

- <frameset>
- <noframes>
- <frame>

Html5新增了 27 个元素，废弃了 16 个元素，根据现有的标准规范，把 HTML5 的元素按优先级定义为结构性属性、级块性元素、行内语义性元素和交互性元素 4 大类。

结构性元素主要负责web上下文结构的定义

section：在 web 页面应用中，该元素也可以用于区域的章节描述。

header：页面主体上的头部， header 元素往往在一对 body 元素中。

footer：页面的底部（页脚），通常会标出网站的相关信息。

nav：专门用于菜单导航、链接导航的元素，是 navigator 的缩写。

article：用于表现一篇文章的主体内容，一般为文字集中显示的区域。

级块性元素主要完成web页面区域的划分，确保内容的有效分割。

aside：用于表达注记、贴士、侧栏、摘要、插入的引用等作为补充主体的内容。

figure：是对多个元素进行组合并展示的元素，通常与 ficaption 联合使用。

code：表示一段代码块。

dialog：用于表达人与人之间的对话，该元素包含 dt 和 dd 这两个组合元素， dt 用于表示说话者，而 dd 用来表示说话内容。

行内语义性元素主要完成web页面具体内容的引用和描述，是丰富内容展示的基础。

meter：表示特定范围内的数值，可用于工资、数量、百分比等。

time：表示时间值。

progress：用来表示进度条，可通过对其 max 、 min 、 step 等属性进行控制，完成对进度的表示和监事。

video：视频元素，用于支持和实现视频文件的直接播放，支持缓冲预载和多种视频媒体格式。

audio：音频元素，用于支持和实现音频文件的直接播放，支持缓冲预载和多种音频媒体格式。

交互性元素主要用于功能性的内容表达，会有一定的内容和数据的关联，是各种事件的基础。

details：用来表示一段具体的内容，但是内容默认可能不显示，通过某种手段（如单击）与 legend 交互才会显示出来。

datagrid：用来控制客户端数据与显示，可以由动态脚本及时更新。

menu：主要用于交互菜单（曾被废弃又被重新启用的元素）。

command：用来处理命令按钮。

移除的元素***

 纯表现的元素：basefont，big，center，font,s，strike，tt，u；

 对可用性产生负面影响的元素：frame，frameset，noframes；

如何处理 HTML5 新标签的浏览器兼容问题？



简述一下你对 HTML 语义化的理解？

(1)HTML 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
(2)即使在没有样式 CSS 的情况下也能以一种文档格式显示，并且是容易阅读的;
(3)搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，有利于 SEO;
(4)使阅读源代码的人更容易将网站分块，便于阅读、维护和理解。

iframe 有那些缺点？

代码复杂，无法被一些搜索引擎索引到

iframe框架页面会增加服务器的http请求，对于大型网站是不可取的。

现在基本上都是用Ajax来代替iframe，所以iframe已经渐渐的退出了前端开发。

title 与 h1 的区别？

h1突出文章主题，面对用户，更突出其视觉效果，突出网站标题或关键字用title。多个h1会稀释主题。一个网站可以有多个title,最好一个单页用一个title，以便突出网站页面主体信息，其中，title权重比h1高，适用性比h1广。标记了h1的文字页面给予的权重会比页面内其他权重高很多。一个好的网站是h1和title并存，既突出h1文章主题，又突出网站主题和关键字。达到双重优化网站的效果。

---

\1. 介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？

所有的文档元素（标签）都会生成一个矩形框，看做盒子，我们称为元素框（element box），由四个属性组成的外边距(margin)、内边距(padding)、边界(border)、内容区(width和height)组成。

标准的CSS盒子模型和低端IE CSS盒子模型不同：

    宽高不一样

　标准的css盒子模型宽高就是内容区宽高；

　低端IE css盒子模型宽高 内边距﹢边界﹢内容区；

\2. CSS选择符有哪些？

（1）标签选择符：如p{color:#F00; font-size:36px;}
（2）类选择符：如 .red{color:#C00;}
（3）ID选择符：如 #two{color:#600; font-family:'汉仪行楷简';}
（4）包含选择符：如 p strong{color:#F00;}
（5）通配选择符：如 *{color:#0C0; font-size:18px;}，可以控制所有的html元素作用范围很广，但是效版率较低
（6）选择符分组：如p,h1,div{color:#F00;font-size:36px;}，对p,h1,div都有效
（7）标签指定式选择符：如p#one{ color:#F00;font-size:36px;}，只对id为one的p标签有效
（8）组合选权择符：将所有选择符类型组合使用

\3. ::before 和 :after 中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

单冒号用于CSS3伪类，双冒号用于CSS3伪元素。（伪元素由双冒号和伪元素名称组成）。

双冒号是在当前规范中引入的，用于区分伪类和伪元素。不过浏览器需要同时支持旧的已经存在的伪元素写法，比如:first-line、:first-letter、:before、:after等，而新的在CSS3中引入的伪元素则不允许再支持旧的单冒号的写法。
想让插入的内容出现在其它内容前，使用::before，否者，使用::after；在代码顺序上，::after生成的内容也::before生成的内容靠后。

\4. 伪类与伪元素的区别

伪类：用于向某些选择器添加特殊的效果

伪元素：用于将特殊的效果添加到某些选择器

\5. CSS 中哪些属性可以继承？

所有元素可继承：visibility和cursor。
内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
 终端块状元素可继承：text-indent和text-align。
 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
 表格元素可继承：border-collapse。 

---

\11. position 的值 relative 和 absolute 定位原点是？

relative（相对定位）：定位原点是元素本身所在位置；
absolute（绝对定位）：定位原点是离自己这一级元素最近的一级position设置为absolute或者relative的父元素的左上角为原点的

\12. CSS3 有哪些新特性？（根据项目回答）

新增各种CSS选择器    （:not(.input)：所有class不是“input”的节点）
圆角        （border-radius:8px）
多列布局    （multi-columnlayout）
阴影和反射    （Shadow\Reflect）
文字特效        （text-shadow）
文字渲染        （Text-decoration）
线性渐变        （gradient）
旋转            （transform）
缩放，定位，倾斜，动画，多背景
例如：transform:\scale(0.85,0.90)\translate(0px,-30px)\skew(-9deg,0deg)\Animation:

\13. 请解释一下 CSS3 的 Flexbox（弹性盒布局模型），以及适用场景？

Flex是FlexibleBox的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、cl
ear和vertical-align属性将失效。

采用Flex布局的元素，称为Flex容器（flexcontainer），简称"容器"。它的所有子元素自动成为容器成员，称为Flex
项目（flexitem），简称"项目"。

容器默认存在两根轴：水平的主轴（mainaxis）和垂直的交叉轴（crossaxis），项目默认沿主轴排列。

以下6个属性设置在容器上。

flex-direction属性决定主轴的方向（即项目的排列方向）。

flex-wrap属性定义，如果一条轴线排不下，如何换行。

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为rownowrap。

justify-content属性定义了项目在主轴上的对齐方式。

align-items属性定义项目在交叉轴上如何对齐。

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

以下6个属性设置在项目上。

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认
值为auto，即项目的本来大小。

flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为01auto。

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父
元素的align-items属性，如果没有父元素，则等同于stretch。

flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex
容器，它的所有子元素都会成为它的项目。

一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用flex-direction来指定主轴的方向。
我们可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还
可以使用flex-wrap来规定当一行排列不下时的换行方式。

对于容器中的项目，我们可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，
项目的放大比例。还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。

\14. 用纯 CSS 创建一个三角形的原理是什么？

    采用的是相邻边框连接处的均分原理。
      将元素的宽高设为0，只设置
      border
      ，把任意三条边隐藏掉（颜色设为
      transparent），剩下的就是一个三角形。
    
      #demo {
    
      width: 0;
      height: 0;
      border-width: 20px;
      border-style: solid;
      border-color: transparenttransparentredtransparent;
    }



\15. 一个满屏品字布局如何设计?

    上面的div宽100%，
    下面的两个div分别宽50%，
    然后用float或者inline使其不换行即可

---

五一练习题

\16. CSS 多列等高如何实现？

- 利用 padding、margin 来实现
- table 布局实现
- flex 布局实现
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>多列等高</title>
          <style>
            /* 公共样式 */
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            ul li {
              background: #0b88ec;
            }
            ul li p {
              padding: 10px;
              margin: 0;
              color: #fff;
            }
      
            /* padding margin 实现样式 */
            .test-1 ul {
              overflow: hidden;
            }
            .test-1 li {
              float: left;
              width: 33.33%;
              padding-bottom: 9999px;
              margin: 0 0 -9999px 0;
            }
      
            /* table 实现样式 */
            .test-2 ul {
              display: table;
            }
            .test-2 li {
              display: table-cell;
              width: 33.33%;
            }
      
            /* flex 实现样式 */
            .test-3 ul {
              display: box;
              display: -webkit-flex;
              display: flex;
            }
            .test-3 li {
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              width: 0;
            }
          </style>
        </head>
        <body>
          <!-- padding margin 实现 -->
          <h3>padding margin 实现:</h3>
          <div class="test-1">
            <ul>
              <li>
                <p>
                  步子不非得迈得大，只要朝着正确的方向前进就行。步子不非得迈得大，只要朝着正确的方向前进就行。
                </p>
              </li>
      
              <li><p>步子不非得迈得大，只要朝着正确的方向前进就行。</p></li>
      
              <li>
                <p>
                  步子不非得迈得大，只要朝着正确的方向前进就行。步子不非得迈得大，只要朝着正确的方向前进就行。步子不非得迈得大，只要朝着正确的方向前进就行。
                </p>
              </li>
            </ul>
          </div>
      
          <!-- table 实现 -->
          <h3>table 实现:</h3>
          <div class="test-2">
            <ul>
              <li>
                <p>
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                </p>
              </li>
              <li><p>步子不非得迈得大，只要朝着正确的方向前进就行。</p></li>
              <li>
                <p>
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                </p>
              </li>
            </ul>
          </div>
      
          <!-- flex 实现 -->
          <h3>flex 实现:</h3>
          <div class="test-3">
            <ul>
              <li>
                <p>
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                </p>
              </li>
              <li><p>步子不非得迈得大，只要朝着正确的方向前进就行。</p></li>
              <li>
                <p>
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                  步子不非得迈得大，只要朝着正确的方向前进就行。
                </p>
              </li>
            </ul>
          </div>
        </body>
      </html>
  

\17. 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧 ？

由于不同厂商的流览器或某浏览器的不同版本（如IE6-IE11,Firefox/Safari/Opera/Chrome等），对CSS的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的CSS样式，针对不同的浏览器/不同版本写相应的CSS code的过程，叫做CSS hack!

默认的内外边距不同
解决方法一.直接用*{margin:0;padding:0;}

方法二.单独清除需要清除的元素 比如 body, h1, h2, h3, h4, h5, h6, p, 　列表元素 dl, dt, dd, ul, ol, li  表单元素 form, fieldset,legend, button, input, textarea 等等

块元素中含有图片时，ie6-7中会出现图片下有空隙
解决方法

1、在源代码中让div和img在同一行

2、将图片转换为块级对象display:block;

3、设置图片的垂直对齐方式  vertical-align:top/middle/bottom

4、设置图片的浮动属性  float:left;

ul和ol列表缩进问题
在IE中，设置margin:0px可以去除列表的上下左右缩进、空白以及列表编号或圆点，设置padding对样式没有影响；

在 Firefox Chrome中，设置margin:0px仅仅可以去除上下的空白，设置padding:0px后仅仅可以去掉左右缩进，还必须设置list- style:none才能去除列表编号或圆点。也就是说，在IE中仅仅设置margin:0px即可达到最终效果，而在Firefox中必须同时设置margin:0px、 padding:0px以及list-style:none三项才能达到最终



\18. li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

引起这种空白间隔的原因：

浏览器的默认行为是把inline元素间的空白字符（空格换行tab）渲染成一个空格，也就是我们上面的代码``换行后会产生换行字符，而它会变成一个空格，当然空格就占用一个字符的宽度。

解决方案：

方法一：既然是因为换行导致的，那就可以将代码全部写在一排，如下

    <div class="wrap">
    <h3>li标签空白测试</h3>
    <ul>
    <li class="part1"></li><li class="part2"></li><li class="part3"></li><li class="part4"></li>
    </ul>
    </div>

方法二：我们为了代码美观以及方便修改，很多时候我们不可能将全部写在一排，那怎么办？既然是空格占一个字符的宽度，那我们索性就将内的字符尺寸直接设为0，将下面样式放入样式表，问题解决。

    .wrap ul{font-size:0px;}

方法三：本来以为方法二能够完全解决问题，但经测试，将li父级标签字符设置为0在Safari浏览器依然出现间隔空白；既然设置字符大小为0不行，那咱就将间隔消除了，将下面代码替换方法二的代码，目前测试完美解决。同样随来而来的问题是li内的字符间隔也被设置了，我们需要将li内的字符间隔设为默认。

    .wrap ul{letter-spacing: -5px;}

之后记得设置li内字符间隔

    .wrap ul li{letter-spacing: normal;}

\19. 为什么要初始化 CSS 样式？

1.浏览器差异

不同浏览器对有些标签的默认值是不同的，如果没对css初始化会出现浏览器之间的页面显示差异

2.提高编码质量

如果不初始化，整个页面做完会很糟糕，重复的css样式很多

20. 什么是包含块，对于包含块的理解？

    包含块简单说就是定位参考框或者定位坐标参考系，元素一旦定义了定位显示（相对、绝对、固定）都具有包含块性质，它所包含的定位元素都将以该包含块为坐标系进行定位和调整。

    包含块是视觉格式化模型的一个重要概念，它与框模型类似，也可以理解为一个矩形，而这个矩形的作用是为它里面包含的元素提供一个参考，元素的尺寸和位置的计算往往是由该元素所在的包含块决定的。
    三、原理：一个元素盒子的位置和大小有时是通过相对于一个特定的长方形来计算的，这个长方形就被称之为元素的 containing block。一个元素的 containing block 按以下方式定义：
    1、用户代理选择根元素作为包含块（称之为初始 containing block）。
    2、对于其它元素，除非元素使用的是绝对位置，包含块由最近的块级祖先元素盒子的内容边界组成。
    3、如果元素有属性 'position:fixed'，包含块由视口建立。
    4、如果元素有属性 'position:absolute'，containing block 由最近的 position 不是 static 的祖先建立，按下面的步骤：
    a、如果祖先是块级元素，由祖先的 padding edge 形成。
    b、如果祖先是内联元素，取决于祖先的 direction 属性。
    ⑴如果 direction 是 ltr（左到右），祖先产生的第一个盒子的上、左内容边界是包含块的上方和左方，祖先的最后一个盒子的下、右内容边界是包含块的下方和右方。
    ⑵如果 direction 是 rtl（右到左），祖先产生的第一个盒子的上、右内容边界是包含块的上方和右方，祖先的最后一个盒子的下、左内容边界是包含块的下方和左方。
    如果没有祖先，根元素盒子的内容边界确定为包含块。

\21. CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？

    对于普通元素visibility:collapse;会将元素完全隐藏,不占据页面布局空间,与display:none;表现相同.
    如果目标元素为table,visibility:collapse;将table隐藏,但是会占据页面布局空间.
    仅在Firefox下起作用,IE会显示元素,Chrome会将元素隐藏,但是占据空间.

\22. width:auto 和 width:100% 的区别

一、width：auto 

1、块级元素默认的宽度值，意味着浏览器会自己选择一个合适的宽度值。

2、内容的宽度='margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right'

如果margin-left' + 'border-left-width' + 'padding-left' + 'padding-right' + 'border-right-width' + 'margin-right'比较大，就减小width的值，如果比较小呢，就增大width的值，使其满足上面的表达式。 

二、width:100% 

当width设置为100%之后，它的宽度就是父级的width，并且随着父级的width自动变化，增加子元素的padding和margin之后，它的width还是不变的，这是与设置为auto的区别。

三、width:auto和width:100%的区别 

1、width:100% 并不包含margin-left margin-right的属性值，直接取其父容器的宽度加上含margin-left /margin-right的值。如果设置了margin那新的width值是容器的宽度加上margin的值。就会发现加了 margin相对应的边就会多出设置的空白。而且会多出横向滚动条因为宽度已经超出了屏幕的范围，(这条相对于父容器是body)。

2、width:auto包含margin-left/margin-right的属性值。width:auto总是占据整行，这其中margin的值已经包含其中了，如果要设置margin的值那就用一整行然后减去margin的值就得到了现在的宽度了。减去的这个值就是相应边得空白。显著的特征是这个没有横向滚动条出现也就是宽度没有增加。

3、一般width:auto使用的多，因为这样灵活，而width:100%使用比较少，因为在增加padding或者margin的时候，容易使其突破父级框，破环布局。



\23. 绝对定位元素与非绝对定位元素的百分比计算的区别

绝对定位元素的百分比margin是相对于第一个定位元素祖先元素（relative/absolute/fixed）的宽度（width）计算的

橙色的宽度（width）为1000px，

蓝色的宽度（width）为600px，

img的margin为10%，

margin-left等于1000*10%，

margin-top等于1000*10%。

这时图片的margin值只与第一个定位元素的宽度有关.

    <!DOCTYPE html>
    <html>
          <head>
                <meta charset="UTF-8">
                <title></title>
                <style type="text/css">
                #bigbox{
                      width: 1000px;
                      height: 200px;
                      background: lightcoral;
                      position: absolute;
                }
                #box{
                      width: 600px;
                      height: 200px;
                      background: deepskyblue;
    
                }
                img{
                margin:10%;
                position: absolute;
                }
                </style>
          </head>
          <body>
                <div id="bigbox">
                                  <div id="box">
                      <img src="img/logo.jpg"/>
                </div>
                </div>
    
          </body>
    </html>

\24. 简单介绍使用图片 base64 编码的优点和缺点。

图标使用的就是base64编码



    //在css里的写法
    #fkbx-spch, #fkbx-hspch {
      background: url(data:image/gif;base64,R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAAAP///yH5B…EoqQqJKAIBaQOVKHAXr3t7txgBjboSvB8EpLoFZywOAo3LFE5lYs/QW9LT1TRk1V7S2xYJADs=) no-repeat center;
    }
    
    //在html代码img标签里的写法
    <img src="data:image/gif;base64,R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAAAP///yH5B…EoqQqJKAIBaQOVKHAXr3t7txgBjboSvB8EpLoFZywOAo3LFE5lYs/QW9LT1TRk1V7S2xYJADs=">

上面分别是图片的 base64 编码在 css 里面的写法和在 html<img> 标签里的写法。base64 编码长得就是这个样子。

为什么要使用 Base64 编码？

那么为什么要使用 base64 传输图片文件？上文也有提及，因为这样可以节省一个 http 请求。图片的 base64 编码可以算是前端优化的一环。效益虽小，但却缺能积少成多。

说到这里，不得不提的是 CssSprites 技术，后者也是为了减少 http 请求，而将页面中许多细小的图片合并为一张大图。那么图片的 base64 编码和 CssSprites 有什么异同，又该如何取舍呢？

所以，在这里要明确使用 base64 的一个前提，那就是被 base64 编码的图片足够尺寸小。以博客园的 logo 为例：



如图所示，博客园的 Logo 只有 3.27KB，已经很小了，但是如果将其制作转化成 base64 编码，生成的 base64 字符串编码足足有 4406 个,也就是说，图片被编码之后，生成的字符串编码大小一般而言都会比原文件稍大一些。即便 base64 编码能够被 gzip 压缩，压缩率能达到 50% 以上，想象一下，一个元素的 css 样式编写居然超过了 2000个 字符，那对 css 整体的可读性将会造成十分大的影响，代码的冗余使得在此使用 base64 编码将得不偿失。

\25. 'display'、'position' 和 'float' 的相互关系？

1）首先我们判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。

（2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被
设置为table或者block，具体转换需要看初始转换值。

（3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display
的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对
于浮动后的最终位置定位。

（4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，
则保持指定的display属性值不变。

总的来说，可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在
的时候，浮动不起作用，'display’的值也需要调整；其次，元素的’float’特性的值不是"none"的时候或者它是根元素
的时候，调整’display’的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display’特性值同设置值。

\26. margin 重叠问题的理解。

对于margin-top重叠：

1.让父元素变成非块状格式化上下文元素（即非BFC）：在父元素中加“overflow:hidden;”

2.给父元素添加border属性：例如1px solid red；

3.在父元素中添加padding-top；

4.在父元素和子元素之间添加空格文字图片等；

对于margin-bottom重叠：和margin-top设置类似，另外还可以给父元素添加高度值；

\27. 对 BFC 规范（块级格式化上下文：block formatting context）的理解？

BFC 是什么？

BFC 就是“块级格式化上下文”的意思,创建了 BFC 的元素就是一个独立的盒子,不过只有 Block-level box 可以参与创建 BFC, 它规定了内部的 Block-level Box 如何布局,并且与这个独立盒子里的布局不受外部影响,当然它也不会影响到外面的元素。

BFC 有一下特性：
内部的 Box 会在垂直方向,从顶部开始一个接一个地放置。
Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生叠加,
每个元素的 margin box 的左边, 与包含块 border box 的左边相接触(对于从左往右的格式化,否则相反)。即使存在浮动也是如此。
BFC 的区域不会与 float box 叠加。

BFC 就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素,反之亦然。
计算 BFC 的高度时,浮动元素也参与计算。

如何触发 BFC？
float 除了 none 以外的值
overflow 除了 visible 以外的值(hidden,auto,scroll)
display (table-cell,table-caption,inline-block, flex, inline-flex)
position 值为(absolute,fixed)
fieldset 元素

(W3C CSS 2.1 规范中的一个概念,它是一个独立容器,决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。)一个页面是由很多个 Box 组成的,元素的类型display 属性,决定了这个 Box 的类型。

不同类型的 Box,会参与不同的 Formatting Context(决定如何渲染文档的容器),因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。

\28. IFC 是什么？

inline formatting content —–行内格式化上下文

1. 你以为font-size规定的是什么？
我猜你们应该都没有想过这个问题，包括我，我也从没想过。因为你写了font-size，然后它就会有一个肉眼可见的大小。但是如果你较真一点，用工具仔细量一下，你会发现，这个font-size很玄，不是你能测量出来的任何数值。
 不知道你们知不知道有一种东西叫做活字印刷术，不知道的话可以百度一下。印刷的时候我们每个字都是放在一个模子里的，而这个模子的高度，就是我们所写的font-size的数值。所以怎么确定一个字占多少像素呢？没法确定。因为每种字体在模子里占据的空间不一样大。甚至有的字体中某些字符会超出这个模子。
2. line-height决定一个内联元素的真正占地高度
不要以为它决定真正的占地高度就很好控制，你试试用两个风格迥异的字体放进同一个容器p中并且设置相同的line-height看最终包裹它们的容器p究竟会有多高。相信我，不要用那些正正经经规规矩矩的字体的话，基本上p是会被撑开一点点的。内联元素默认baseline对齐，不同字体的baseline不同的话，是不在一个水平线上的，它们只要错开了一点点，p的高度就超过这两个元素的line-height了。
line-height不指定的话结果是设计师指定的字体行高。
3. vertical-align: top;—-这个是让两个实际占地面积的上方对齐。像下图，事实上，它们的底部依然是错开的。不同字体的默认行高不同所以实际占地面积不同，所以用vertical-align的各种对齐都不好使，因为和字体有关系。

\29. 请解释一下为什么需要清除浮动？清除浮动的方式

清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。

方法：

1、父级div定义height；
2、父级div 也一起浮动；
3、常规的使用一个class；

                .clearfix::before, .clearfix::after {
                    content: " ";
                    display: table;
                }
                .clearfix::after {
                    clear: both;
                }
                .clearfix {
                    *zoom: 1;
                }


4、SASS编译的时候，浮动元素的父级div定义伪类:after

                &::after,&::before{
                    content: " ";
                    visibility: hidden;
                    display: block;
                    height: 0;
                    clear: both;
                }


解析原理：

1.display:block 使生成的元素以块级元素显示,占满剩余空间;
2.height:0 避免生成内容破坏原有布局的高度。
3.visibility:hidden 使生成的内容不可见，并允许可能被生成内容盖住的内容可以进行点击和交互;
4.通过 content:".“生成内容作为最后一个元素，至于content里面是点还是其他都是可以的，例如oocss里面就有经典的 content:”.",有些版本可能content 里面内容为空,一丝冰凉是不推荐这样做的,firefox直到7.0 content:”" 仍然会产生额外的空隙；
5.zoom：1 触发IE hasLayout。
通过分析发现，除了clear：both用来闭合浮动的，其他代码无非都是为了隐藏掉content生成的内容，这也就是其他版本的闭合浮动为什么会有font-size：0，line-height：0。

\30. 使用 clear 属性清除浮动的原理？

设置了clear属性的元素,相应的会在两侧按照没有浮动元素的样式排下去,所以不会受到浮动元素的影响,从而实现清除浮动”

\31. zoom:1 的清除浮动原理?

zoom:1的清除浮动原理?
清除浮动，触发hasLayout；
Zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。
譬如外边距（margin）的重叠，浮动清除，触发ie的haslayout属性等。
来龙去脉大概如下：

当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。

Zoom属性是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。然而，zoom现在已经被逐步标准化，出现在 CSS 3.0 规范草案中。目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？可以通过css3里面的动画属性

\32. 移动端的布局用过媒体查询吗？

可以把浏览器调到指定分辨率。才能出现媒体查询的效果。

\33. 使用 CSS 预处理器吗？喜欢哪个？

    SASS (SASS、LESS没有本质区别，只因为团队前端都是用的SASS)

\34. CSS 优化、提高性能的方法有哪些？

1，首推的是合并css文件，如果页面加载10个css文件，每个文件1k，那么也要比只加载一个100k的css文件慢。

2，减少css嵌套，最好不要套三层以上。

3，不要在ID选择器前面进行嵌套，ID本来就是唯一的而且人家权值那么大，嵌套完全是浪费性能。

4，建立公共样式类，把相同样式提取出来作为公共类使用，比如我们常用的清除浮动等。

5，减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？当然重置样式这些必须 的东西是不能少的。

6，巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。

7，拆分出公共css文件，对于比较大的项目我们可以将大部分页面的公共结构的样式提取出来放到单独css文件里， 这样一次下载后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。

8，不用css表达式，表达式只是让你的代码显得更加炫酷，但是他对性能的浪费可能是超乎你的想象的。

9，少用css rest，可能你会觉得重置样式是规范，但是其实其中有很多的操作是不必要不友好的，有需求有兴趣的 朋友可以选择normolize.css

10，cssSprite，合成所有icon图片，用宽高加上bacgroud-position的背景图方式显现出我们要的icon图，这是一种 十分实用的技巧，极大减少了http请求。

11，当然我们还需要一些善后工作，CSS压缩(这里提供一个在线压缩 YUI Compressor ，当然你会用其他工具来压缩是十 分好的)，

12，GZIP压缩，Gzip是一种流行的文件压缩算法，详细做法可以谷歌或者百度。

\35. 浏览器是怎样解析 CSS 选择器的？

CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

---

\36. 在网页中应该使用奇数还是偶数的字体？为什么呢？

偶数字号相对更容易和 web 设计的其他部分构成比例关系

  使用奇数号字体不好的地方是，文本段落无法对齐

1.是为了迁就ie6，万恶的ie6会把定义为13px的字渲染成14px，

2.原因是，偶数宽的汉字，比如12px宽的汉字，去掉1像素的间距，填充了像素的实际宽是11px，这样汉字的中竖线左右是平分的，以“中”这个字为例，在12像素时，竖线在中间，左右各5像素，显得均衡。

3.像谷歌一些比较流行的浏览器一般会有个默认的最小字体，而且对奇数字体渲染的不太好看



\37. margin 和 padding 分别适合什么场景使用？

margin:

     需要在border外侧添加空白时；
    
     空白处不需要背景（色）时；
    
    上下相连的两个盒子之间的空白，需要相互抵消时。

padding：

    需要在border内测添加空白时；
    
    空白处需要背景（色）时；
    
    上下相连的两个盒子之间的空白，希望等于两者之和时。

\38. 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

抽离样式模块
  因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
    最简单的初始化方法： * {padding: 0; margin: 0;} （强烈不建议）

        body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
        body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
        h1, h2, h3, h4, h5, h6{ font-size:100%; }
        address, cite, dfn, em, var { font-style:normal; }
        code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
        small{ font-size:12px; }
        ul, ol { list-style:none; }
        a { text-decoration:none; }
        a:hover { text-decoration:underline; }
        sup { vertical-align:text-top; }
        sub{ vertical-align:text-bottom; }
        legend { color:#000; }
        fieldset, img { border:0; }
        button, input, select, textarea { font-size:100%; }
        table { border-collapse:collapse; border-spacing:0; }

\39. 简单说一下 css3 的 all 属性。

一、兼容性

兼容性还行， 除了IE不支持，其他浏览器基本上都绿油油，目前自娱自乐，内网项目什么的都是可以用用的。

二、all是干嘛用的

all属性实际上是所有CSS属性的缩写，表示，所有的CSS属性都怎样怎样，但是，不包括unicode-bidi和direction这两个CSS属性。

为什么会有这个CSS属性呢？

我们可能知道，有些CSS属性值基本上所有CSS属性都有，比方说继承inherit!

我们CSS reset输入框的时候，是不是有类似这样的代码（实际可能是具体值，作用类似）：

    input, textarea {    color: inherit;    font-size: inherit;    font-family: inherit; }

因为这类输入控件自身有内置的大小和字体，需要重置。

此时，大家就会发现，这些属性值都是inherit, 要是可以合并就好了！

CSS all属性就是用来合并的。

    input, textarea { 
       all: inherit; 
    }

三、语法和区别

语法如下：

    all: initial;
    all: inherit;
    all: unset;
    
    /* CSS4特性，无视之 */
    all: revert;

默认的HTML和CSS是这样的，一个传统的标签内容，有标题有列表：

    <article>
        <h6>标题</h6>
        <p>p变文字</p>
        <ol>
            <li>有序列表1</li>
            <li>有序列表2</li>
            <li>有序列表3</li>
        </ol>
        <textarea>文本域</textarea>
    </article>
    article {
        background-color: #f0f3f9;
        color: green;
    }
    article > textarea {
        border: 1px solid #34538b;
        background-color: #ffffe0;
        color: red;
    }

\40. 为什么不建议使用统配符初始化 css 样式。

当span不进行样式设置的时候会继承父类，而这里span的父类是div，如上所示，div的color是红色，则span中的字体颜色为红色。

此时运行的结果为green色，原因是*（通配符）的权重是0，而继承的权重是NULL所以 0 > NULL(起码0是数字)导致文字不是自己预期的效果，所以不推荐使用通配符。

---

\41. absolute 的 containing block （包含块）计算方式跟正常流有什么不同？

包含块（Containing Block）是视觉格式化模型的一个重要概念，它与框模型类似，也可以理解为一个矩形，而这个矩形的作用是为它里面包含的元素提供一个参考，元素的尺寸和位置的计算往往是由该元素所在的包含块决定的。简单地说就是定位参考或者坐标参考系。元素一旦定义了定位显示，无论是相对，绝对或者固定，都具有包含块的性质，它所包含的定位元素都将以包含块为坐标系进行定位和调整。

一个元素的containing block，由position属性确定：

1，static：默认,relative，简单说就是他的父元素的内容框，即去掉padding部分。

2，absolute：向上找最近的absolute/relative定位的元素。

3，fixed：它的contacining block一律为根元素（html/body）,根元素也是initial containing block.

\42. 对于 hasLayout 的理解？

什么是haslayout?

　　haslayout是IE浏览器的私有概念。从CSS的角度看，IE使用这个属性来区别一个元素是自己决定自己的尺寸和内容还是依赖祖先元素来决定自己的尺寸和内容。

　　对于haslayout = true的元素，自己决定自己的尺寸和内容。

　　对于haslayout = flase的元素，依赖祖先元素决定自己的尺寸和内容。

　　haslayout只存在于IE6和7浏览器中（IE6以下的版本不考虑，IE8及更高的版本废除了这一属性）。

　　为什么不让所有的元素都自己决定尺寸和内容？微软给出的答案是：让所有元素自己决定尺寸和内容会导致性能下降，并且浏览器会有额外的内存开销。

如何查看一个元素的haslayout？

　　两种方法：

　　1.在IE Develop Toolbar中，haslayout = true的元素的haslayout属性都是-1。

　　2.使用js脚本。下面的脚本输出元素的haslayout属性（true or false）。虽然在IE8及更高的版本废除了这个属性，但是在IE8及以后的浏览器中还是可以调用这个脚本来查看元素的haslayout属性的。

    var dv = document.getElementById("testdiv");
    alert(dv.currentStyle.hasLayout);

什么元素haslayout = true ? 什么元素haslayout = flase ？

　　下面的元素默认haslayout = true（不是全部的元素，只列举了最常用的元素）

　　<img>

　　<table> <tr> <td> <th>

　　<hr>

　　<input> <select> <textarea>

　　<html> <body>

　　下面的元素默认haslayout = false（不是全部的元素，只列举了最常用的元素）

　　<form>

　　<div>

　　<span>

　　<h1>~<h6>

　　<p>

　　<a>

　　<ul> <li>



如何让haslayout = false的元素变成haslayout = true?

　　对于haslayout = false的元素，通过设置特定的CSS属性可以使其haslayout = true.

　　下面的方法（不全，只列举了常用的方法）对IE6和IE7都能改变haslayout = true。

　　position : absolute;

　　float : left/right;

　　display : inline-block;

　　width/height : 10px;(设定特定的值就可以）

　　zoom : 1;(设定特定的值就可以)

　　下面的方法只对IE7起作用（IE6和IE7一般都是同时改变元素的haslayout属性，因此下面的方法用的不是很多）

　　overflow/overflow-x/overflow-y : auto/hidden/scroll;

　　min-width/min-height : 10px;(包含0在内的任意值)

　　max-width/max-height : 10px;(除none外的任何值)

　　position : fixed;

　　（在很多讲解haslayout的文章中都有这么一句话“如果某个HTML元素拥有 haslayout 属性，那么这个元素的 haslayout 的值一定只有 true，haslayout 为只读属性 一旦被触发，就不可逆转”，但是通过简单demo就可以测试这句话的真实性。　　　　　　    div#testdiv{height: 60px;display: inline;}，实际测试中，这个div的haslayout = false。所以，如果不是我的理解有问题，那么上面的那句话是有问题的）



\43. 元素竖向的百分比设定是相对于容器的高度吗？

对于竖直方向的margin和padding，参照父元素的宽度。
对于水平方向的margin和padding，也是参照父元素的宽度。

\44. 全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践）

在学习ES6知识点时，看到了fullpage.js，可以实现全屏滚动，也就是类似于幻灯片或者轮播图的效果。

    //html结构
    <div id="wrap">
        <div id="main">
            <div id="page1" class="page"></div>
            <div id="page2" class="page"></div>
            <div id="page3" class="page"></div>
            <div id="page4" class="page"></div>
        </div>
    </div>

wrap块为窗口可看到的部分，我们可以通过js获取窗口可视区的大小，并为其设置为：overflow:hidden属性，使得窗口不出现滚动条，只显示窗口大小的一页内容。
设置main区域，定位为relative,通过改变main块的top属性实现不同页面的切换，具体的css代码如下：

    html,body{
        margin:0;
        padding:0;
    }
    #wrap{
        width:100%;
        overflow:hidden;
        background:#111;
    }
    #main{
        width:100%;
        background:#222;
        position:relative;
    }
    .page{
        width:100%;
        margin:0;
    }


js代码的主要部分就是对滚动事件的函数绑定，大多数浏览器提供了mousewheel事件，Firefox 3.5+不支持，但支持相同作用的事件：DOMMouseScroll;
mousewheel事件：event.wheelDelta 返回的如果时正值说明滚轮是向上滚动的；
DOMMouseScroll事件：event.detail 返回的如果时负值说明滚轮是向上滚动，每页高度为 document.body.clientHeight+px;

    var pages = document.getElementsByClassName('page');
    var wrap = document.getElementById('wrap');
    var len = document.documentElement.clientHeight;
    var main = document.getElementById('main');
    wrap.style.height=len+"px";
    for(var i=0;i<pages.length;i++){
        pages[i].style.height=len+"px";
    }
    if(navigator.userAgent.toLowerCase().indexOf('firefox') !=-1){
        document.addEventListener("DOMMouseScroll",scrollFun);
    }else if(document.addEventListener){
        document.addEventListener("mousewheel",scrollFun,false);
    }else if(document.attachEvent){
        document.attachEvent("onmousewheel",scrollFun);
    }else{
        document.onmousewheel=scrollFun;
    }
    var startTime = 0;
    var endTime = 0;
    var now = 0;
    function scrollFun(e){
        startTime = new Date().getTime();
        var event = e || window.event;
        var dir = event.detail || -event.wheelDelta;
        if(startTime - endTime > 1000){
            if(dir>0 && now > -3*len){
                now -= len;
                main.style.top = now + "px";
                endTime = new Date().getTime();
            }else if(dir<0 && now < 0){
                now += len;
                main.style.top=now+"px";
                endTime=new Date().getTime();
            }
        }else{
            event.preventDafault();
        }
    }




\45. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解）

响应式网站设计(Responsive Web design)的理念是：集中创建页面的图片排版大小，可以智能地根据用户行为以及 使用的设备环境（系统平台、屏幕尺寸、屏幕定向等）进行相对应的布局，无论用户正在使用笔记本还是iPad，我们 的页面都应该能够自动切换分辨率、图片尺寸及相关脚本功能等，以适应不同设备。

响应式Web设计不仅仅是关于屏幕分辨率自适应以及自动缩放的图片等等，它更像是一种对于设计的全新思维模式, 如我们需要兼容不同屏幕分辨率、清晰度以及屏幕定向方式竖屏(portrait)、横屏(landscape)

页面的设计和开发应当根据用户行为以及设备环境（系统平台、屏幕尺寸、屏幕定向等）进行相应的响应和调整。具体的实践方式由多方面组成，包括弹性网格和布局、图片、css media query的使用等。无论用户正在使用笔记本还是iPad，我们的页面都应该能够自动切换分辨率、图片尺寸及相关脚本功能等，以适应不同设备；换句话说，页面应该有能力去自动响应用户的设备环境。

响应式网页设计就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这样，我们就可以不必为不断到来的新设备做专门的版本设计和开发了。

响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。页面头部必须有meta声明viewport：

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>
---



\52. layout viewport 、visual viewport 和 ideal viewport 的区别？



\55. 如何去除 inline-block 元素间间距？
\56. overflow: scroll 时不能平滑滚动的问题怎么处理？
\57. 有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。
\58. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？

---

\85. clip 裁剪是什么？
\86. relative 的特殊性？
\87. 什么是层叠上下文？

---

\91. font-weight 的特殊性？
\92. text-indent 的特殊性？
\93. letter-spacing 与字符间距？

---

\94. word-spacing 与单词间距？
\95. white-space 与换行和空格的控制？
\96. 隐藏元素的 background-image 到底加不加载？




