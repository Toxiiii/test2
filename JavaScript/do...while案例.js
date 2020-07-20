// 求100以内所有3的倍数的和
var i = 1;
var sum = 0; 
do {
	// 循环体
	// 判断是否是3的倍数，如果是3的倍数累加
	// i自身加一
	if (i % 3 === 0) {
		sum += i;
	}
	i++;
}while (i <= 100);
console.log(sum);
// 使用do-while循环：输出询问“我爱你，嫁给我吧？”，
// 选择“你喜欢我吗？(y/n):"，
// 如果输入为y则打印”我们形影不离“，若输入为n,则继续询问 
do {

	var msg = prompt('我爱你，嫁给我吧？'，'请输入yes或者no') 
}while (msg !== 'yes') 
console.log('爱你哟')；
