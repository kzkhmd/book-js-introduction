const AUTHOR = 'Yamada Taro';

export function getTriangleArea(base, height) {
    return base * height / 2;
}

export class Member {
    constructor(name = 'Taro') {
        this.name = name;
    }

    greet() {
        return `Hello, I am ${this.name}`;
    }
}

function getAuthor() {
    return AUTHOR;
}

function getVersion() {
    return '1.0';
}

export { AUTHOR, getAuthor, getVersion };
