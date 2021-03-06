## print()函数

#### 无引号

```python
print(520)
```

实现与计算机交互的“初体验”，离不开**print()函数**。

这段Python代码却帮你做了这样的一些事情：

（0）我们向计算机发出指令：“打印‘520’”；

（1）Python把这行代码编译成计算机能听懂的机器语言；

（2）计算机做出相应的执行；

（3）最后把打印结果呈现在我们面前。

![image-20200713160108996](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713160108996.png)

print()函数的主要功能：打印内容。



打印的意思是：让计算机把你给它的指令结果，显示在屏幕的终端上。

#### 单引号的用法

练习：让计算机写出自己的名字。

------













```python
print('名字')
```

你会发现，多了一对单引号。

打印文字的时候需要加上引号

计算机的脑回路比较特别：只能理解数字，却读不懂文字。

因为数字和数学运算是标准化、有固定格式的，而文字却能够千变万化。

![image-20200713162235034](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713162235034.png)

#### 双引号的用法

在print()函数内不仅能使用单引号，还能使用双引号，两者的效果没什么区别，都能让你打印出一行文本。

有些时候，单引号和双引号可能会在括号内同时出现，比如

```python
print("Let's play")
```

这种情况下，需要注意区分清楚哪个引号是属于print()函数结构，哪个引号是属于你要让计算机打印的内容.

```python
# 括号内是单引号的情况。
print('一起玩吧')

# 括号内是双引号的情况。
print("一起玩吧")

# 括号内单双引号同时存在的情况。
print("Let's play")
```

上面的 # 常用作单行注释符号，用于解释单行代码

比如  # 括号内是单引号的情况 用于解释说明代码print('一起玩吧')＃号后边的任何数据在代码运行的阶段不会被输出。

```
print(1+1)
print('1'+1)
print('1'+'1')
```

#### 三引号的用法

在print内部使用三引号**'''**（连续输入三个单引号）来实现跨行输出。

> ```
> 我愿意留在汤婆婆的澡堂里工作两年，如果我违背工作内容的话，将在这个世界变成一头猪。
> ```

#### 总结

![image-20200713163241575](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713163241575.png)

![image-20200713163300305](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713163300305.png)

注意：

默认所有正确的语法，包括标点符号都是**英文**。

不小心用了中文标点的话，计算机会无法识别，然后报错。

最常见的符号报错提示就是

【syntaxError:invalid syntax】

（语法错误：无效语法）

#### 转义字符

```python
print('''我愿意留在汤婆婆的澡堂里工作两年，
第一年在锅炉房和锅炉爷爷一起烧锅炉水，
将在这个世界变成一头猪。
''')
```

还有第二种实现换行的办法：使用转义字符**\n**，像这样：

![image-20200713163532622](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713163532622.png)





## 变量和赋值

给变量赋值

例如：name='炒饭'

**name**就是一个变量，这行代码的意思，就是把“炒饭”这两个字【赋值】给了“name”这个【变量】。

为了在日后能在计算机中更方便地找到名字

```python
name='臭嗨'
name='炒饭'
print(name)
```

运行下面这段代码，看一下打印函数的最终输出结果是什么。

我们对“name”这个变量第一次的赋值，为什么打印的结果是第二次的赋值呢？

**变量之所以称为变量，是因为它保存的数据是可以随意变化的。**

#### 变量的命名规范

![image-20200713163905094](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713163905094.png)

比如说，如果信息是姓名，那么变量可以命名为name；如果信息是数字，那么变量名则应该叫做number。

> **请问【43】更适合放在以下哪个变量中？**
>
> A.number
>
> B.name
>
> C.a
>
> D.text



注意：

赋值符号`=`不是左边等于右边的意思。

仅仅表示赋值动作：把右边的内容放到了左边的盒子中。

代表左右两边相等的符号，是比较运算符`==`

![image-20200713164103412](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713164103412.png)

![image-20200713164138944](C:\Users\62792\AppData\Roaming\Typora\typora-user-images\image-20200713164138944.png)

案例：

```python
import random
import time

###提示语部分
print('你好，我是机器人小埋，我们来玩个猜年龄的小游戏吧～(◆◡◆)')
time.sleep(2)

print('''
=============================
   干物妹！うまるちゃんの年齢
=============================
''')
time.sleep(1)


print('小埋的真实年龄在1到10之间哦～')
time.sleep(1)


print('不过，你只有5次机会哦～')
time.sleep(1)


print('下面，请输入小埋的年龄吧：')


#从0至10产生一个随机整数，并赋值给变量age
age = random.randint(1,10)


#设置次数
for guess in range(1,6):
   
   #输入玩家猜测的年龄
    choice=int(input())
    
    #判读玩家输入的年龄是否等于正确的年龄
    if choice<age:
        print('小埋的提示：你猜小了（；´д｀）ゞ。。。。')
                
    elif choice>age:
        print('小埋的提示：乃猜大了惹(＞﹏＜)～～')
            
    else: 
        print('猜了'+str(guess)+'次，你就猜对惹～hiu(^_^A;)～～～')
        break   
                
#判断猜测次数 
if choice  == age:
    print('搜噶～那么小埋下线了～拜拜～（￣︶￣）↗')
    
else:
    print('哎呀～你还是木有猜对啊～但是你只有5次机会诶～怎么办啊～')
    print('那好吧～心软的小埋只好告诉你，我才'+str(age)+'岁哦～(*/ω＼*)')

```

代码里还用到了条件判断if语句、input()函数

## 小练习

除了文字和数字之外，我们还可以灵活运用print()函数，打印出带特殊格式的东西，例如：字符画。

### 题目要求：

请你使用**print()函数**和`'''`将下面的皮卡丘打印出来。

皮卡丘字符画会直接提供。  

```
 へ　　　　　／|
　　/＼7　　　 ∠＿/
　 /　│　　 ／　／
　│　Z ＿,＜　／　　 /`ヽ
　│　　　　　ヽ　　 /　　〉
　 Y　　　　　`　 /　　/
　ｲ●　､　●　　⊂⊃〈　　/
　()　 へ　　　　|　＼〈
　　>ｰ ､_　 ィ　 │ ／／
　 / へ　　 /　ﾉ＜| ＼＼
　 ヽ_ﾉ　　(_／　 │／／
　　7　　　　　　　|／
　　＞―r￣￣`ｰ―＿
```























```python
print('''
    へ　　　　　／|
　　/＼7　　　 ∠＿/
　 /　│　　 ／　／
　│　Z ＿,＜　／　　 /`ヽ
　│　　　　　ヽ　　 /　　〉
　 Y　　　　　`　 /　　/
　ｲ●　､　●　　⊂⊃〈　　/
　()　 へ　　　　|　＼〈
　　>ｰ ､_　 ィ　 │ ／／
　 / へ　　 /　ﾉ＜| ＼＼
　 ヽ_ﾉ　　(_／　 │／／
　　7　　　　　　　|／
　　＞―r￣￣`ｰ―＿            ''')
```

