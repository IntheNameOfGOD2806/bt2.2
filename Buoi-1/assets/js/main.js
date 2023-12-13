// Lap Trinh Bat Dong Bo


// Khai bao functA
// let functA = () => {
//   setTimeout(() => {
//     console.log("Thuc hien xong cong viec 1");
//   }, 3000);
// }
// Thuc thi functA
// functA();


// Khai bao functB
// let functB = () => {

//   setTimeout(()=>{
//     console.log("Thuc hien xong cong viec 2");
//   }, 5000);
// }
// Thuc thi function B
// functB();

// Callback function

// Bat dong bo - Lam 3 cong viec cung 1 luc
// 1. Lam bai tap (3s)
// 2. Da Bong (4s)
// 3. Nau com (5s)


// Thuc hien Lam bai tap
// let work1 = () => {
//   console.log("Lam bai tap");
// }
// work1();

// // Thuc hien Da Bong
// let work2 = () => {
//   console.log("Da bong");
// }
// work2();

// // Thuc hien cong viec nau com
// let work3 = () => {
//   console.log("Nau com");
// }
// work3();



// Thuc hien tuan tu - Dong Bo
// 1. Lam bai tap (3s)
// 2. Da Bong (4s)
// 3. Nau com (5s)

// Khai bao
// let work1 = (name, callback) => {
//   console.log("Bat dau cong viec: ");
//   console.log("Thuc hien cong viec 1: " + name);
//   // Lam bai tap 3s -> Da bong
//   setTimeout(() => {
//     callback();
//   }, 3000);
// }
// let work2 = (name, callback) => {
//   console.log("Thuc hien cong viec 2: " + name);

//   // Sau khi Da bong 4s -> Nau com
//   setTimeout(() => {
//     callback();
//   }, 4000);
// }
// let work3 = (name) => {
//   console.log("Thuc hien cong viec 3: " + name);
//   // NAU COM TRONG VONG 5S -> Ket thuc
//   setTimeout(()=>{
//     console.log("Ket thuc!");
//   }, 5000)
// }


// Thuc thi
// work1("Lam bai tap", () => {
//   work2("Da bong", ()=> {
//     work3("Nau com");
//   });
// });



// Tao ra 1 promise
// let money = 10;

// Khoi tao ra 1 loi hua: Mua iphone
// let buyIphone = new Promise((resolve, reject) => {

//   if (money > 30) {
//     resolve("Mua duoc iphone");
//   } else {
//     reject("Kiem them tien de mua!");
//   }

// });

// Khoi Tao ra 1 loi hua nua: Mua apple watch
// Thua tien mua apple watch 8tr
// let buyAppleWatch = new Promise((resolve, reject) => {
//   if (money - 30 - 8 >= 0) {
//     resolve("Mua luon apple watch");
//   } else {
//     reject("Mua minh iphone thoi!");
//   }
// });


// Thuc thi buyIphone
// buyIphone

//   // Thanh cong
//   .then((data) => {

//     // Data tham so co san => Tra ve resolve
//     // Khi loi hua duoc thuc hien thanh cong chay vao day
//     console.log(data);
//     return buyAppleWatch;

//   })
//   .then((response) => {
//     console.log(response);
//   })

//   // Truong hop loi
//   .catch((error) => {
//     console.log(error);
//     return buyAppleWatch
//   })
//   .catch((error_1) => {
//     console.log(error_1)
//   })

//   // Mac dinh
//   .finally(() => {
//     console.log("Di ve nha");
//   });


// // Async Fucntion
// let hello = async() => {
//   return "hello";
// }

// // C2:
// hello()
//   .then((res)=>{
//     console.log(res);
//   })


// Hien thi ra chu "I LOVE YOU"

// khoi tao
let love = async() => {

  // Khoi tao 1 loi hua
  let myPromis = new Promise((resolve, reject)=>{
    resolve("I Love you");
  })

  document.querySelector("h1").innerHTML =await myPromis;
}

// Thuc thi
love();
console.log('123');