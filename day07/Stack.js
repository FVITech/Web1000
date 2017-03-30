class Stack{
  constructor(){
    this.values = [];
  }
  push(element){
    this.values.push(element);
  }
  pop(){
    if (this.values.length === 0) return null;
    var temp = this.values[this.values.length-1];
    this.values = this.values.slice(0, this.values.length - 1);
    return temp;
  }
  peek(){
    if (this.values.length === 0) return null;
    return this.values[this.values.length-1];
  }
}

var s1 = new Stack();
s1.push("hello");
s1.push("they aint lookin for biggie's killer");
s1.push("ask pac");
console.log(s1)
s1.pop();
s1.push("it was suge");
console.log(s1);

/*
Stack Example:

https://www.codewars.com/kata/valid-parentheses/train/javascript

Pseudo code solution

initialize stack as empty array
var stack = []
for (var i = 0; i < parens.length; i++){
  var c = parens[i];
  if (c === "("){
    stack.push(c);
  }
  else{
    var t = stack.pop()
    if (t != "(")
      return false
  }
}
return stack.length === 0;


*/
