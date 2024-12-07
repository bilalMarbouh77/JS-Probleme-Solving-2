// Question:
// Write a JavaScript function that
// removes all spaces from a given
// string and returns the new string
// without spaces.

// Solution:

let str = "Hello Worled"
function noSpace(str){
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            continue;
        }else{
            newStr += str[i];
        }
    }
    return newStr
}
console.log(noSpace(str))
