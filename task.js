//  Task-1

let num = ["2", "4", "3", "7", "11", "12", "20", "25", "28", "57", "86"]

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

// Task-2

for(i = 0; i <= 100; i++){
     
if(i % 3 == 0 && i % 5 == 0){

    console.log("FizzBuzz")
}
else if(i % 3 == 0){
    console.log("Fizz")
}

else if(i % 5 == 0){
    console.log("Buzz")
}
}

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

let alphabet = ["c", "a", "n", "h", "y","w"]

console.log(alphabet.sort());


//  Task-5

class employ {
    constructor(name, id, subject, classs){
        this.Name = name,
        this.Id = id,
        this.Subject = subject,
        this.Classs = classs
    }
}
class emp1 extends employ{
    constructor(name, id, subject, classs){
        super(name, id, subject, classs)   
    }
}
let employs = new employ("Sana", 02, "Js", "c2");
let empl = new emp1("Filza", 05, "PHp", "b2");

console.log(employs)
console.log(empl)
