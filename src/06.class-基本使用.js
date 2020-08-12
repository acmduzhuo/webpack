function Person(name, age){
    this.name = name
    this.age = age
}
const p1 = new Person('王多多', 18)
console.log(p1)


//----------------这是一道分割线--------------
console.log('----------------------')



//创建了一个动物类
class Animal{
    //这是类中的构造器
    //每一个类中，都有一个构造器
    //如果没有手动指定构造器，那么可以认为每一个类中，可以有一个隐形的构造器
    //构造器的作用，每当new该类时，必然会优先执行构造器中的代码
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const a1 = new Animal('大黄','3')
console.log(a1)