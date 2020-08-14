function Person(name, age){
    this.name = name
    this.age = age
}
//info属性，直接挂载给了构造函数，所以是静态属性
Person.info = 'aaaa'

Person.prototype.say = function(){
    console.log('这是 Person 的实例方法')
}//原型上添加方法，不浪费内存

//静态方法
Person.show = function(){
    console.log('这是 Person 的静态 show 方法')
}//挂载在构造函数上
const p1 = new Person('王多多', 18)
console.log(p1)
p1.say()//这是实例方法
Person.show()


//----------------这是一道分割线--------------
console.log('----------------------')



//创建了一个动物类
//注意1：在class花括号区间内，只能写构造器、静态方法和静态属性、实例方法
//注意2：class 关键字内部还是用原来构造函数来实现，把class关键字，称作语法糖：
class Animal{
    //这是类中的构造器
    //每一个类中，都有一个构造器
    //如果没有手动指定构造器，那么可以认为每一个类中，可以有一个隐形的构造器
    //构造器的作用，每当new该类时，必然会优先执行构造器中的代码
    constructor(name, age){
        //实例属性
        this.name = name;
        this.age = age;
    }
    //在class内部，通过static修饰的属性，就是静态属性
    static info = "eee" //使用不多

    //这是动物的实例方法，很常用
    jiao(){
        console.log('动物的实例方法')
    }
    //这是动物类的静态方法，使用不多
    static show(){
        console.log('这是 Animal 的静态 show 方法')
    }
}

const a1 = new Animal('大黄','3')
console.log(a1)//这是实例方法
a1.jiao()
Animal.show()