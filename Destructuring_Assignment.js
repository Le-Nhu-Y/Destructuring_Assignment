//Bước 1: Sử dụng destructuring assignment trích xuất các giá trị của mảng
let names= ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;
console.log(firstName);
console.log(secondName);
//Buoc 2:
let [firstName, thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName);
console.log(thirdName);

//Buoc 3:
let [firstName,,... lastName]=["alpha", "beta", "gamma", "delta"];
console.log(firstName);
console.log(lastName);

//Buoc 4:
let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName);
console.log(secondName);

[firstName, secondName] = [secondName, firstName]
console.log(firstName);
console.log(secondName);

//Buoc 5:
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [firstName, secondName] = NamesList();
console.log(firstName);
console.log(secondName);

//Buoc 6:
let marks = {x: 21, y: -34, z: 47 };

let x = marks.x; // x = 21
let y = marks.y; // y = -34
let z = marks.z; // z = 47

console.log(x);
console.log(y);
console.log(z);
// Chay lai chuong trinh voi destructuring assignment là:
let marks = {x: 21, y: -34, z: 47 };

const { x, y, z } = marks;

console.log(x);
console.log(y);
console.log(z);
//Buoc 7:
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1);