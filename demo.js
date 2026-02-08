
//Khai báo hàm 
//Khi xây dựng hàm ,cần phải xác định các thông tin sau:
// 1.Tên hàm
// 2.Số lượng tham số và đối số
// 3.Logic của lý
// 4.Kết quả trả về

// Function declaration
function sum(firstNumer,secondNumber) {
    console.log("Hàm tính tổng",firstNumer+secondNumber);
    return firstNumer+secondNumber;
}

//Để hàm được thực hiện thì cần phải được gọi
sum(10,30);

// Lấy kết quả trả về từ hàm
const result = sum(10,20);
console.log("result:",result);

//Nếu khai báo các hàm trùng tên nhau nhưng logic lại  khác nhau thì sẽ lấy hàm đcượ khai báo sau

// tính tổng các số trong các mảng sau :
const firstArray = [10,30,40,20,90,100];
const secondArray = [10,50,40,800,90,1000];

function sumArray(array){
    let total =0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        
    }
    return total;
}

const totalSumArray = sumArray(firstArray);
const totalSumSecondArray =sumArray(secondArray);
console.log("totalSumArray:",totalSumArray);
console.log("totalSumSecondArray:",totalSumSecondArray);

//FUnction expresstion
const expressFunc = function (firstNumber,secondNumber){
    return firstNumber+ secondNumber;
};
const result_1 = expressFunc(10,20);

console.log("result_1:",result_1);

// Arrow function

// const getName = (userName) => {
//     return `Teen của tôi là:${userName}`
// };

//Lưu ý:Đối với những hàm co logic xủa lý đơn giản thì có thể return trực tiếp mà ko cần dung từ khóa return
//Arrow funtion ko có ngữ cảnh (dùng từ khóa this) và ko có objct constructor


const getName = (userName) => `Teen của tôi là:${userName}`;

console.log(getName("Nguyễn Văn A"));

//Quy tắc comment theo chuẩn của jsDoc


/**
 * @description Hàm định dạng chuỗi họ và tên
 * @param {*} firstName Họ và tên đệm
 * @param {*} lastName Tên 
 * @returns Họ và tên đầy đủ
 * @author Nguyễn Như Quỳnh (6/2/2026)
 * @modified: Nguyễn Văn A (04/09/2027)
 */
const getFullName = (firstName, lastName) => `FullName:${firstName} ${lastName}`;

getFullName("Nguyễn Văn","Nam");

// IIFE

(()=> {
    console.log("IIFE");
    
})