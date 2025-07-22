// class
class Member {
    static cache;

    // init static member
    static {
        this.cache = new Map();
    }

    // private member
    #name = '';
    #age = 0;
    #birth = new Date();

    // getter
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get birth() {
        return new Date(this.#birth.getTime());
    }

    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.gender = gender;

        // this class is immutable
        Object.freeze(this);
    }

    static of(name) {
        if (this.cache.has(name)) {
            return this.cache.get(name);
        }
        let m = new Member(name);
        this.cache.set(name, m);
        return m;
    }

    #createMessage() {
        return `My name is ${this.#name}, ${this.#age} years old. Gender is ${this.gender}`;
    }

    show() {
        console.log(this.#createMessage());
    }
}

let member = new Member();
console.log(member);
member.show();

let member2 = new Member('male');
member2.show();

let member3 = new Member('Yuko', 20, 'female');
member3.show();

// static member
class Area {
    static pi = 3.14;

    static circle(radius) {
        return (radius ** 2) * this.pi;
    }
}

console.log(Area.pi);
console.log(Area.circle(10));

let m1 = Member.of('Taro');
let m2 = Member.of('Taro');
console.log(m1 === m2);

// this
globalThis.name = 'Kenta';
let mem = {
    name: 'Tomoya',
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

function myHigher(fn) {
    fn.call(mem)    // fn capture mem
}

myHigher(mem.greet);

// prototype
console.log(Object.getPrototypeOf(member3));
console.log(Member.prototype === Object.getPrototypeOf(member3));

Member.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
}
member3.sayHello();

// private member
console.log(member3.name);
console.log(member3.age);
console.log(member3.birth);

member3.birth = new Date();
console.log(member3.birth);
