const a = 10;
const b = 20;
const c = 5;
let d;

if (a > b && a > c){
    d = a;
} else if (b > a && b > c) {
    d = b;
} else {
    d = c;
}
console.log(d);