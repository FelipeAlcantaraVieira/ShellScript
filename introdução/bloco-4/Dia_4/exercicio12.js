let string = "trybe";
let string2 = "be";

function verificaStrings(string1, string2){
    reverseString1 = string1.split("").reverse().join("");
    reverseString2 = string2.split("").reverse().join("");
    for (index in reverseString2){
        if (reverseString1[index] != reverseString2[index]){
            return false;
        } else {
            return true;
        }
    }
}
console.log(verificaStrings(string, string2));