//array data type is  an object
const a = [1, 2, 3] //a=memory address
const b = [1, 2, 3] //b=memory address
console.log(a === b) //memory address of a === memory address of b //false
const c = b //alias give memory address of b to cconsole.log(c === b) //truec[0] = 'A'console.log(b) //['A',2, 3]console.log(c) //['A', 2, 3]a[0] = 555console.log(a)console.log(b)console.log(c)//object data types is an objectconst x = { id: 1, title: 'JS' }const y = { id: 1, title: 'JS' }const z = y //give memory address of y to zconsole.log(x === y) //memory address of x === memory address of y //falseconsole.log(y === z) //memory address of y === memory address of z //truey.id = 888console.log(x) //{ id: 1, title: 'JS' }console.log(y) //{ id: 888, title: 'JS' }console.log(z) //{ id: 888, title: 'JS' }//primitivelet m = 5 //m stores 5let n = 10 //n stores 10let o = n //n assign 10 to o then o stores 10m = 999 //m reassign to 999 then m stores 999o = 1000 //o reaasign to 1000 then o stores 1000console.log(o === n) //1000===10 //falseconsole.log(m) //999console.log(n) //10console.log(o) //1000