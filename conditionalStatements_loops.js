//1. Temperature check
    //(i). If...


let temperature = 0

if (temperature < 0){
    console.log("It is freezing")
}
else if (temperature >= 0 && temperature <= 15){
    console.log("It is cold")
}
else if (temperature >= 16 && temperature <= 25){
    console.log("It is mild")
}
else if (temperature > 25){
    console.log("It is warm")
}
else{
    console.log("Unknown weather")
}

//(ii) Switch

let temperature = 0

switch (true){

    case (temperature < 0):
        console.log("It is freezing")
        break

    case (temperature >= 0 && temperature <= 15):
        console.log("It is cold")
        break

    case (temperature >= 16 && temperature <= 25):
        console.log("It is mild")
        break

    case (temperature > 25):
        console.log("It is warm")
        break

    default:
        console.log("Unknown weather")
}

//2 (i) Divisibility

let number = 12

if (number % 2 === 0 && number % 3 === 0){
    console.log("Divisible by both")
}
else if (number % 2 === 0){
    console.log("Divisible by 2")
}
else if (number % 3 === 0){
    console.log("Divisible by 3")
}
else{
    console.log("Not divisible by 2 or 3")
}

// (ii) Devisibilty Switch

let number = 12

switch(true){

    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both")
        break

    case (number % 2 === 0):
        console.log("Divisible by 2")
        break
    
    case (number % 3 === 0):
        console.log("Divisible by 3")
        break
    
    default:
        console.log("Not divisible by 2 or 3")
}

//3 for loops

for(let number = 1; number <= 10; number ++)
{
    console.log(number)
}  

