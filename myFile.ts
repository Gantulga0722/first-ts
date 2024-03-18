let a = "abc";
console.log(a);

function doSomething(a: number, b: number):number {
  console.log(a);
  console.log(b);
  return a + b;
}
doSomething(33, 22);
