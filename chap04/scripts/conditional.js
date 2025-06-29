// if
let x = 30;

if (x >= 20) {
    console.log('greater than 20');
} else if (x >= 10) {
    console.log('greater than 10');
} else {
    console.log('less than 10');
}

x = 9;
if (x >= 10) {
    if (x >= 20) {
        console.log('greater than 20');
    } else {
        console.log('10 <= x < 20');
    }
} else {
    console.log('less than 10');
}

// switch
let rank = 'B';

switch (rank) {
    case 'A':
        console.log('rank A');
        break;
    case 'B':
        console.log('rank B');
        break;
    default:
        console.log('rank Nothing');
        break;
}

// caseは===で比較される
let num = '0';
switch (num) {
    case 0:
        console.log('0');
        break;
    default:
        console.log('do nothing');
        break;
}
