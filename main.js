let someone = ""
let who
console.log(typeof someone) //string

let discount = 0
let x = 5 //global
console.log(x) //5

//normally
if(someone) {//statement ... ไปอ่านต่อ
  let x = 1 //blockscope
who ="member"
discount = 0.1
console.log(x) //1
} else {
  let x = 2 //blockscope
  who ="guest"
  discount = 0.05
  console.log(x) //2
}

//Conditional Operator(?:)
//?: if-else with expression
//who = someone ? 'member' : 'guest' //ควรใช้แบบนี้
//someone ? (who = 'member') : (who = 'guest') //assignment statement not นิพทย์
//ให้ค่าค่าหนึ่ง หรือ ... (ไปอ่านต่อ)
//line ?: จะใช้ไม่ได้ถ้าเงื่อนไขมีหลาย action หรือเริ่มมีความซับซ้อน
console.log(x) //5
console.log(who) //guest
console.log(discount)
