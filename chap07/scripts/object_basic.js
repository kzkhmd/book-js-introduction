'use strict';

// Object literal
let i = 0;
let member = {
    name: 'name',
    age: 21,
    show: function() {
        console.log(`my name is ${this.name}, ${this.age} years old.`);
    },
    greet() {
        console.log(`hello, world.`)
    },
    [`memo${++i}`]: 'official',
    [`memo${++i}`]: 'president'
};

member.show();
member.greet();
console.log(member);

let name = 'Taro';
let birth = new Date(1995, 1, 1);
let person = {name, birth};
console.log(person);

let member2 = new Object();
member2.name = 'Yuki';
member2.age = 23;
member2.show = function() {
    console.log('hello, world');
};
member2.show();

//
let member3 = Object.create(Object.prototype, {
    name: {
        get() {
            return this._name;
        },
        set(value) {
            this._name = value;
        }
    },
    birth: {
        value: new Date(1995, 1, 1),
        writable: true,
    },
    age: {
        get() {
            let birth = this.birth;
            let current = new Date();
            let c_birth = new Date(current.getFullYear(), birth.getMonth(), birth.getDate());
            return (current.getFullYear() - birth.getFullYear()) + (c_birth.getTime() > current.getTime() ? -1 : 0);
        }
    }
});

// member3.name = 'Yuta';

// for (const prop in member3) {
//     console.log(prop);
// }

// delete member3.name;

member3.name = 'Yuko';
console.log(member3.name);
