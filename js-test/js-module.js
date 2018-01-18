//立即执行函数
var module1 = (function(){
	var _count = 0;
	var m1 = function(){
		//...
	};
	var m2 = function(){
		//...
	}
	return {
		m1 : m1,
		m2 : m2
	}
})();

//放大模式
module1 = (function(mod){
	mod.m3 = function(){
		//...
	};
	
	return mod;
})(module1);

//宽放大模式
module1 = (function(mod){
	mod.m3 = function(){
		//...
	};
	
	return mod;
})(window.module1 || {});


/*import {name,age} from './test.js'
console.log(name);*/
