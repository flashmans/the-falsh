/*水仙花*/
function ti4(){
	//获取到3位数字
	for(var i=100;i<=999;i++ ){// 123    %10    1234
		
		//个为数字
		var g= i%10;// 123%10  => 3
		//十位数字
		var s= (i-g)/10%10;  //(123-3)10%10==>2
		//百位数字
		//var b= (i-s*10-g)/100   // (123-3-2*10)/100==>1
		
		var b= (i-s*10-g)/100%10; //功能个强大，不仅仅3位数 ，4位数
	
		//3次方
		if( g*g*g+s*s*s+b*b*b == i){
			document.write(i+"<br/>");
		}
		
		
		
	}
	
}

/*x的y次方*/
function ti5(){
	
	var  x= prompt("请输入底数")*1;//2
	
	var y=prompt("请输入指数")*1;//-3    1/2*2*2
	
	var result=1;//结果
	/**
	 * falg标记y是正数还是负数，如果y是负数时，flag用true表示；如果y是正数时，flag用false表示，
	 */
	var flag=false ;//标记y是否为负数，如果是则为true,默认为正数
	
	//判断y是否负数
	if(y<0){
		y=0-y;
		flag=true;//改变标记，备后期使用
	}
	
	//循环
	for(var i=1;i<=y;i++){
		result=result*x;
	}
	
	if(flag){//指数当初是负数
		document.write(x+"的-"+y+"次方="+(1/result));
	}else{
		document.write(x+"的"+y+"次方="+result);
	}
	
	
	
	
}


/*统计字符串中，各种字符出现的次数*/
function ti6(){
	
	var  str=prompt("输入一个字符串");//"helloWorld123!" 字符    串
	
	var  bigLetter=0;
	var  smallLetter=0;
	var  numberCount=0;
	var  others=0;
	
	
	
	for(var i=0;i<str.length;i++){
		//获取到str中i（开始0）位置上的字符
		//str.charAt(i);
		//获取到str中i（开始0）位置上的字符所对应的ASCII值
		var  code=str.charCodeAt(i);
		
		if(code>=48 && code<=57){//加入上下限，准确定位了范围
				numberCount++;
		}else if(code>=65 && code<=90){
				bigLetter++;
		}else if(code>=97 && code<=122){
				smallLetter++;
		}else{
				others++;
		}
	}
	
	//统计结束打印结果
	document.write(str+"中大写字母的个数："+bigLetter+"小写个数："+smallLetter+"数字个数："+numberCount+"其他字符个数："+others)
}
/**
 * 输入一个数倒叙输出
 */
function ti10_1(){
	var  str=prompt("输入数字");	//123456
	var  result=0;
	
	for(var i=str.length-1;i>=0;i--){
		var  c=str.charAt(i);
		result=result+c*1;
		document.write(c);
		
	}
	document.write("<br/>之和"+result);
	
}
/*
 * 用数字的形式处理
 * do_while循环 ，先执行循环体，再进行判断；并且一般循环次数不定
 * 语法：
 * 	  do{循环体
 * 		}while(循环条件);
 * 
 * while  先进行判断，后进行循环操作
 * 语法:
 * 		while(循环条件){
 * 			循环体
 * 		}	
 * 	
 * 
 *  do_while和while循环的差异
 * 1.语法不同
 * 2.执行顺序不同
 * 3.do_while至少会执行一次循环体，while有肯能一次循环体都不执行
 * 
 * for 和 do_while 和 while
 * 1.语法
 * 2.如果循环次数固定，for循环， 否则  do_while 或者 while，（主要两个选择使用）
 * 
 * 
 */
//参照EXCEL表
function ti10_2(){
	var result=0;
	
	var  num=prompt("输入数字")*1;	//123456
	
	while(num>0){
		
		var val =num%10;//余数值，这个数字的最后一位数字
		result=result+val;
		
		document.write(val);
		
		num=(num-val)/10;
	
	}
	document.write("<br/>之和"+result);
}


/**
 * 猜数字
 * 随机数，在计算机中随机产生的一个数
 * var a=Math.random()
 * a的范围[0,1),a>=0 && a<1;
 *  var a=parseInt(Math.random()*10);//0-9
 * 
 */
function  ti11(){
	
	//随机数
	var a=parseInt(Math.random()*1000);//0-999
	var  count=0;
	
	do{
		var num=prompt("请输入一个数字")*1;
		count++;
		
		if(num>a){
			alert("输入大了");
		}else if(num<a){
			alert("输入小了");
		}else{
			
			alert("恭喜你输入正确,猜的次数"+count);
			
		}
		
	}while( num!=a );
	
}

/*
 
 * 在循环
 * break;跳出循环，执行循环之外的代码，粗暴
 * continue；跳出本次循环，执行下次循环，温柔
 * */
function test1(){
	
	for(var i=0;i<10;i++){
		
		if(i==5){
			break;
		}
		
		document.write("i现在的值："+i+"<br/>");

	}
}

function test2(){
	
	for(var i=0;i<10;i++){
		
		if(i==5){
			continue;
		}
		
		document.write("i现在的值："+i+"<br/>");
		
		
		
	}

}

/**
 * 绘制正方形
 */
function test3(){
	
	//控制行
	for(var i=1;i<=4;i++){
		//行中具体信息
		for(var j=1;j<=4;j++){
			//行中的一个列
			document.write("*");
		}
		//写完一行后进行换行
		document.write("<br/>")
		
	}
	
}


function test4(){
	//行
	for(var i=1;i<=4;i++){
		
		//行中的具体信息
		for(var j=1;j<=i;j++){
			
			document.write("*");
		}
		
		//行信息输出完毕，进行换行
		document.write("<br/>");
		
	}
	
}
/**
 * 99乘法表
 */
function test5(){
	//行
	for(var i=1;i<=9;i++){
		
		//每行上的信息
		for(var j=1;j<=i;j++){
			
			if(j*i<10){
				document.write(j+"*"+i+"=&nbsp;&nbsp;"+(j*i)+"&nbsp;&nbsp;");
			}else{
				document.write(j+"*"+i+"="+(j*i)+"&nbsp;&nbsp;");
			}
			
			
		}
		//行信息输出完毕，进行换行
		document.write("<br/>");
		
	}
}

/**
 * 冒泡排序
 */
function test6(){
	var a=[123,23,34,19,45,56,1,3];
	
	//比较的轮次
	for(var i=1;i<a.length;i++){
		
		//每轮中具体的比较，j下标
		for(var j=0;j<a.length-i;j++){
			
			//j和他后方的元素进行比较
			if(a[j]>a[j+1]){
				//交换位置
				var temp=a[j];
				a[j]=a[j+1];
				a[j+1]=temp;
				
			}
		}
	}
	
	//排序完毕
	document.write(a);
	
}

/*
 * 给数组多添加元素（在数组的尾部进行添加）
 * 
 */

function  test7(){
	var  a=[1,2,3];
	
	document.write("原始数组："+a);
	
	//在尾部添加一个元素
	a.push(4);
	
	document.write("添加后数组："+a);
}

/*
 * 给数组中删除一个元素，(在尾部删除)
 */
function test8(){
	var  a=[1,2,3];
	document.write("原始数组："+a);
	//删除尾部数据
	a.pop();
	document.write("删除尾部后数组："+a);
	
}

/*
 * 数组进行倒叙
 * 
 * */

function  test9(){
	
	var a=[123,23,34,19,45,1];
	
	document.write("原始的数组："+a);
	//交换的次数
	for(var i=0;i<parseInt(a.length/2);i++){
		
		//a.length-1-i：和i交换的哪个数据的下标
		var  temp= a[a.length-1-i];
		
		a[a.length-1-i]= a[i];
		
		a[i]=temp;
	}
	
	document.write("倒叙后的数组："+a);
}
/**
 * 使用以提提高的方法进行倒叙处理数据
 */

function  test10(){
	
	var a=[123,23,34,19,45,1];
	document.write("原始的数组："+a);
	
	//倒叙
	a.reverse();
	
	document.write("倒叙后的数组："+a);
	
	
}
/**
 * 根据元素获取元素的下标
 * a.indexOf(123)
 * 结果是-1时，该元素不存在
 */
function  test11(){
	
	var a=[123,23,34,19,45,1];
	
	document.write(a.indexOf(1234));
	
	
}

/**
 * 字符串
 * 将别的数据类型转为字符串 : +""
 *   					   String(数据);
 *                         .toString()
 * 	
 */
function  test12(){
	
	var  b=123;//b ，number
	
	//var  c=b+"";
	//var c=String(b);
	var   c=b.toString();
	
	document.write(typeof c);
	
}

/*
 * 号称2亿的AI代码,replace的使用
*/
function test13(){
	while(true){
		var str=prompt("输入你想说的话");
		//能不能  -> 能
		//好不好  ->好
		str=str.replace("吗","。");
		str=str.replace("能不能","能");
		str=str.replace("好不好","好");
		alert(str);
	}
}

/*
 * indexOf和lastIndexOf的区别
 */
function test14(){
	var  str="helloWorld";
	
	var i= str.indexOf("l");//查询l所在的位置,2
	
	
	var  j=str.lastIndexOf("l");//查询l所在的位置,8
	
	document.write(i+","+j);

}

/*
 * 切割，后变成一个字符串数组
 */

function test15(){
	var  str="helloWorld";
	var  strs=str.split("o");//hell,w,rld
	document.write(strs);

}

/**
 * substr和substring
 * 
 */
function test16(){
	var  str="helloWorld";
	
	var a=str.substr(2,3);//第一参数 截取数据的开始位置，第二个参数是截取大小（个数）
	var b=str.substring(2,3);//第一参数 截取数据的开始位置,第二个参数是截取结束位置（不包含结束位置）
	//可以进行截取 length-5 到 length-1// [5,9)
	var c=str.slice(-5,-1);//强大之处在于可以处理负数的，如果是负数 相当于  length- 5,
	//str.slice(5,9)
	
	
	
	document.write(a+","+b+","+c);
	
	
}

/**
 * valueOf()返回的还是该字符串数据
 */
function test17(){
	
	
	var  str="123";
	/*原始值是由从 String 对象下来的所有对象继承的*/
	var  a=str.valueOf();
	
	document.write(typeof a);
}

/*
 * 去除前后空格
 * 
 * */

function test18(){
	var  str="   1   2    3    ";
	document.write("!"+str.trim()+"!");
}


/*
 * 比较两个字符串
 */

function test19(){
	//abc  cbc  ==>-1     abc  - cbc
	// abc  abc  ==>0
	// dbc  abc  ==>1
	
	// abc  abd  ==>    
	var  a="abc";
	var  b="abd";
	document.write(a.localeCompare(b));
}















