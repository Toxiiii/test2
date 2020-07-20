    // 打印100以内 7的倍数

    // 定义起点数
    var i = 1;
    // 判断语句
    while (i <= 100) {
    	// 判断当前的i是否是7的倍数
    	if (i % 7 === 0 ) {
    		console.log(i);
    	}
    	// i自身加一
    	i++;
    }

    // 打印100以内所有偶数

    var a = 1;
    while (a <= 100) {
    	if (a % 2 === 0) {
    		console.log(a);
    	}
    	a++;
    }
    // 打印100以内所有偶数的和

    var b = 1;
    var sum = 0;
    while (b <= 100) {
    	if (b % 2 === 0){
    		sum += b;
    	}
    	b++;
    }
    console.log(sum);

    // 打印100以内的奇数
    var c = 1;
    while (c <= 100) {
    	if (c % 2 !== 0) {
    		console.log(c);
    	}
    	c++;
    }
    // 打印100以内的奇数的和
    var d = 1;
    var sum =0;
    while (d <=100) {
    	if (d % 2 !== 0) {
    		sum += d;
    	}
    	d++;
    }
    console.log(sum);