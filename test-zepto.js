//创建插件
;(function(){
	$.extend($.fn,{
		foo : function(){
			return this.html("bar");
		}
	})
})(Zepto);

$("div")
$("#foo")
$("<p>hello</p>")  //新的p元素
//创建带有属性的元素
$("<p />", {text:"hello",id:"greeting",css:{color:"red"}})
//=> <p id="greeting" style="color: red;">hello</p>

//当页面ready的时候，执行回调
Zepto(function($){
	alert("Ready to Zepto!");
})

$.camelCase("hello-world")  //转驼峰格式 helloWorld

$.contains(parent,node);

//$.each() 遍历数组元素或以key-value值对方式遍历对象。回调函数返回false时停止遍历
$.each(["a","b","c"], function(index,item) {
	console.log("item %d is: %s",index,item)
});

var hash = {name:"zepto.js", size:"micro"}
$.each(hash, function(key,value) {
	console.log("%s : %s",key,value);
});

//$.extend() 默认为浅拷贝，true时为深度拷贝
var target = {one : "hello"}, 
    source = {two : "world"};
$.extend(true,target,source);

//=>{one: "hello", two: "world"}

//clone() 通过深度克隆来复制集合中的所有元素。不会将数据和事件处理程序复制到新的元素，与jQuery不同

//$.fn
$.fn.empty = function(){
	return this.each(function(){
		this.innerHTML = '';
	})
}

//$.grep() 获取一个新数组，新数组只包含回调函数中返回true的数组项
		var items = [1,2,3];
		$.grep(items, function(item){
			return item > 1     // 返回大于1的项
		})   //=> [2,3]
		
//$.inArray() 返回数组中指定元素的索引值（从0开始），如果没有返回-1。[fromIndex]可选，表示从哪个索引值开始向后查找
$.inArray("a",["w","a","e","c"],1)  //1

//$.isArray()  ==>boolean
var arr = [];
$.isArray(arr)  //true

//$.isFunction() ==>boolean
//$.isNumeric()  有限数值或一个字符串表示的数字    v1.2+
var str = "1234";
$.isNumeric(str);  //true

//$.isPlainObject()  是否是纯粹的对象, 对象常量{}或new Object创建的
$.isPlainObject(new Date) //false

//$.isWindow()  每个iframe都有它自己的window对象

//$.map(collection, function(item,index){...})  返回新数组
$.map([1,2,3,4], function(item,index){
	if(item > 1){
		return item*item;    //[4,9,16]
	}
})  
$.map({"a":1,"b":2,"c":3}, function(item,index){
	if(item > 1){
		return item*item;    //[4,9]
	}
})

//$.noop v1.2+ 引用一个空函数，什么都不处理
var callback = $.noop;

//$.parseJSON(string) ==>object  JSON.parse()  json格式的字符串
/*var strJson = {'a':1,'b':2,'c':3,'d':4};   ???
$.parseJSON(strJson);*/

//$.trim(string) 删除字符串首尾的空白符
var strTrim = "  ab c v  ";
$.trim(strTrim);   //"ab c v"

//$.type(object) 获取对象类型 
//null undefined boolean number string function array date regexp object error


//add()
//addClass()


//after() 外面插入
//before()
//为每个匹配元素末尾外面插入内容  内容可为html字符串，dom节点，或节点组成的数组
$("p").after("<span>aaa</span>");

//append() 
//appendTo()  内部插入

//attr()

//children()
