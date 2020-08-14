console.log('OK')

//父类 
//可以理解为原型对象prototype
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sayHello(){//打招呼的实例方法
        console.log('大家好')
    }
}


//子类米国人
//在class类中，可以使用extends关键字实现子类继承父类
//语法：class 子类名 extends 父类名
class American extends Person{
    //问题1：为什么一定要在constructor中调用super
    //  如果一个子类通过extends关键字继承了父类，那么在constructor构造函数中，必须优先调用super，语法规定
    //问题2：何为super
    // super()是一个函数，而且是父类的构造器；子类中的super其实就是父类constructor构造器的引用
    //问题3：为何调用了super()， a1实例的name和age都变为了undefined
    //  由问题2可知，构造器并未传值
    constructor(name, age){
        super(name, age)
    }
}
const a1 = new American('Jack', 20)
console.log(a1)
a1.sayHello();


//子类中国人
class Chinese extends Person{
    constructor(name, age){
        super(name, age)
    }
}
const c1 = new Chinese('张三', 22)
console.log(c1)
c1.sayHello();