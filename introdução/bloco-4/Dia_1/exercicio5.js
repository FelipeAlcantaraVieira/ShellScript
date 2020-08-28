const a = 60;
const b = 50;
const c = 60;
const d = a + b + c;
let state;
if (d == 180){
    state = true;
    console.log(state);
} else {
    state = false;
    console.log(state);
    console.log("erro! angulos invalidos");
}