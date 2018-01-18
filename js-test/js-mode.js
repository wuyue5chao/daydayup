/**
 * Created by admin on 2017/11/13.
 */

/*简单工厂*/
var Basketball = function(){
    this.intro = '篮球';
}

Basketball.prototype = {
    getMember : function(){
        console.log('5名队员');
    },
    getBallSize : function(){
        console.log('篮球很大');
    }
};

var Football = function(){
    this.intro = '足球';
}

Football.prototype = {
    getMember : function(){
        console.log('11名队员');
    },
    getBallSize : function(){
        console.log('足球很大');
    }
};

var SportsFactory = function(name){
    switch (name){
        case 'NBA' : return new Basketball();
        case 'wordCup' : return new Football();
    }
};

SportsFactory('NBA').getBallSize();

/*工厂模式*/
var Factory = function(type,content){
    if(this instanceof Factory){
        var s = new this[type](content);
        return s;
    }else {
        // 防止使用者不知道这是一个类，忘了加new操作符创建，导致全局变量污染
        return new Factory(type,content);
    }
};

Factory.prototype = {
    Java : function(content){
        console.log(content);
    },
    JavaScript : function(content){
        console.log(content);
    },
    Php : function(content){
        console.log(content);
    }
}

Factory('Java','Hello Java');

/*抽象模式*/
var VehicleFactory = function(subType, superType){

}
