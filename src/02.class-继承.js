console.log('OK')

//父类 
//可以理解为原型对象prototype
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}


//子类米国人
//在class类中，可以使用extends关键字实现子类继承父类
//语法：class 子类名 extends 父类名
class American extends Person{
    
}
const a1 = new American('Jack', 20)
console.log(a1)


//子类中国人
class Chinese extends Person{

}

const c1 = new Chinese('张三', 22)
console.log(c1)