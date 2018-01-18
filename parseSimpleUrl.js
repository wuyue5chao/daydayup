// var url = 'http://cp-dev.ylot.net/?sid=10001&u=CoolpadPush';
function parseSimpleUrl(url){
	var tmp = url.split('?');
	// ['http://cp-dev.ylot.net/','sid=10001&u=CoolpadPush']

	var path = tmp[0]; // 'http://cp-dev.ylot.net/'
	var args = {};

	if(tmp[1] && tmp[1].length){
		var tmp2 = tmp[1].split('&');
		// ['sid=10001','u=CoolpadPush']

		tmp2.forEach(function(v){
			var tmp3 = v.split('=');
			// ['sid','10001']
			args[tmp3[0]] = tmp3[1] ? tmp3[1] : null;
			// args['sid'] = '10001'; args['u'] = 'CoolpadPush'
			//args{sid:10001, u:'CoolpadPush'}
		})
	}
	return {path : path, args: args};
}


/*
var ret = parseSimpleUrl(window.location.href);
console.log(ret);  //{path:"http://cp-dev.ylot.net/",args:{sid:10001, u:CoolpadPush}}
console.log(ret.args.sid)  //10001
*/