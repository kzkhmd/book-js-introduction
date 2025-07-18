// Prototype
let parent = {
    x: 10,
    y: 20,
    w: {
        get() {
            return this._w ?? 10;
        },
        set(value) {
            this._w = value;
        }
    }
};

let obj = Object.create(parent, {
    z: {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(obj);
console.log(Object.getPrototypeOf(obj));

parent.v = 0;
console.log(obj);

obj.x = 100;
console.log(obj);
console.log(parent);

// call setter
obj.w = 0;
console.log(obj);
console.log(parent);

// delete property
console.log(delete obj.x);
console.log(obj.x);
