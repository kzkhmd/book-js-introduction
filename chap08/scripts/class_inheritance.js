// inheritance
class Member {
    constructor(name = 'Taro') {
        this.name = name;
    }

    greet() {
        return `Hello, I am ${this.name}`;
    }
}

class BusinessMember extends Member {
    constructor(name = 'Taro', title = 'employee') {
        super(name);
        this.title = title;
    }

    greet() {
        return `${super.greet()}. I am ${this.title}`;
    }

    work() {
        return `${this.name} is working.`;
    }
}

let member = new BusinessMember('Yuko', 'president');
console.log(member.greet('president'));
console.log(member.work());

// delegation
class Queue {
    #list = [];

    constructor(...data) {
        this.#list = data;
    }

    enqueue(element) {
        this.#list.push(element);
    }

    dequeue() {
        return this.#list.shift();
    }

    peek() {
        return this.#list[0];
    }
}

let q = new Queue(10, 20, 30);
q.enqueue(40);
console.log(q.dequeue());
console.log(q.peek());

// type check
console.log(member instanceof Member);
console.log(member instanceof BusinessMember);

console.log('name' in member);
console.log('say' in member);
