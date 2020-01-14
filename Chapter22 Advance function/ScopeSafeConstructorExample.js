function AAA(params) {
    this.params = params
}

var p = new AAA("bbb") //new一个对象的话，AAA内的this指向被实例化的对象

var t = AAA("aaa") //如果直接这样调用的话，AAA的this会指向window，造成window的对象属性意外增加

//下面是解决这个问题的办法，判断this是不是被实例化的类的实例
//安全作用域的构造函数
function Person(name, age, job) {
    if(this instanceof Person){
        this.name = name
        this.age = age
        this.job = job
    }else{
        return new Person(name,age,job)
    }
}