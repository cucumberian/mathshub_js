let count = 15;

let point = 5;
 while (count < 18) {

    point = point + 3

    count++

}

console.log(point)


let num = 17
let str = "17"
let empty = null

console.log(str-num); // 0
console.log(empty - num) // -17 // true
console.log(str - empty) // 17


if (str - num) {
    console.log('first')
} else if (empty - num) {
    console.log("second")
} else if (str - empty) {
    console.log("third")
} else {
    console.log("no one")
}