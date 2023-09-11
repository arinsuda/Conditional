//nullish Coalescing (??)
//[] represents an empty array
//{} reporesents an empty object
let nums = [1, 2, 3]
let arr
arr = nums ?? []
console.log(nums)
console.log(arr)

let num1
let are
are = num1 ?? []
console.log(are)
console.log(num1)

let arr3 = [] //empty String
arr3 = arr3 ?? [1, 2, 3]
console.log(arr3)

// nullish เหมือนการกำหนดค่าใหม่ให้ ตัวนั้นแล้วมันจะเลือกมาอะ เช่น
let ara;
ara = ara ?? [1, 2, 3];
console.log(ara); // ได้ array [1, 2, 3] เพราะ arr เป็น undefined

// ก็คือในกรณีที่ arr เป็น undefined ค่าใหม่ที่เรากำหนดให้ arr ก็คือ[1, 2, 3] มันก็จะ แสดง result ออกมาว่า[1, 2.3] แต่ถ้าในกรณีที่ arr ไม่มีค่าอะไรหรือมันก็ result เป็น undefined เช่น
let num2
let ard
are = num2 ?? []
console.log(ard)
console.log(num2)
// อันนี้ num1 จะได้ result เป็น undefined เนื่องจากมันไม่มีค่าอะไรเลย แต่ are จะได้ result เป็น[] 

// ดูอันนี้ถ้านึกภาพไม่ออก คือ
let arr2 = []; // สร้างอาร์เรย์ว่าง
arr2 = arr2 ?? [1, 2, 3];
console.log(arr2);

// ตอนนี้ result นี้จะได้[] แต่ถ้า arr1 เราไม่ได้กำหนดค่า เช่น
let arr1
arr1 = arr1 ?? [1, 2, 3];
console.log(arr1);
//ตอนนี้ result นี้จะได้[1, 2, 3] แทน