//  Task-1

let num = [2, 4, 5, 7, 9, 12, 20, 25, 33, 56, 87]

function retrunEvenSum(num){
    let sum = 0;
for (i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        sum = sum + num[i];
    }
}
console.log(sum);
}
retrunEvenSum(num);

// Task-3

let data = {
    Make : "Honda",
    Model : "Toyota",
    Year : "2021"
}
function printobj(data){
    for(i in data){
        console.log(i + ":" + data[i])
    }
}

printobj(data)


// Task-4

let alphabet = ["c", "a", "n", "h", "y","w",]

console.log(alphabet.sort());


