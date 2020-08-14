function Person(name, age){
    this.name = name
    this.age = age
}
//info属性，直接挂载给了构造函数，所以是静态属性
Person.info = 'aaaa'
const p1 = new Person('王多多', 18)
console.log(p1)
//通过new出来的实例，访问到的属性，叫做 实例属性
// console.log(p1)//实例属性
// console.log(p1.name)
// console.log(p1.age)
// [静态属性]通过构造函数直接访问到的属性
console.log(Person.info)

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
    //在class内部，通过static修饰的属性，就是静态属性
    static info = "eee"
}

const a1 = new Animal('大黄','3')
console.log(a1)
//通过this分配的属性，也可以叫做实例属性
console.log(a1.name)
console.log(a1.info);
console.log(Animal.info)//info是Animal的静态属性