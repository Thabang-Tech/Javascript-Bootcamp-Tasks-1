//Exercise 1: Temperature check
    
//(1)

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

//(2)

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

// Exercise 2: Divisibility check

//(1)

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

// (2) 

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

// Exersice 3 for loops

// (1)

for(let number = 1; number <= 10; number ++)
{
    console.log(number)
}  

// (2)

for(let number = 1; number <= 20; number ++)
{
    if(number % 2 === 0){
        console.log(number)
    }
}

// (3)

let sum = 0

for(let number = 1; number <= 100; number ++)
{
    sum += number
}
console.log(sum)

// (4)

const numbers = [1,2,3,4,5]

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

// (5)

const numbers = [3,7, 2, 5, 10, 6]

console.log(numbers[4])

// Exercise 4: While Loops

// (1)

let number = 1

while(number <= 10){
    console.log(number)
    number++
}

// (2)

let number = 1

while(number <= 20)
{
    if(number % 2 === 0){
        console.log(number)
    }
    number ++
}

// (3)
let number = 1
let sum = 0

while(number <= 100)
{
    sum += number
    number ++
}
console.log(sum)

// (4)

let number = 1

while(number <= 50)
{
    if(number % 5 === 0){
    console.log(number)
    }
    number ++
}

//  Exercise 5: Do while loops

// (1)

let number = 1

do {
    console.log(number)
    number++
}
while(number <= 10)

// (2)

let sum = 0
let number = 1

do{
    sum += number
    number ++
}
while(number <= 100)

console.log(sum)

// (3)

let number

do {
    number = Number(prompt("Enter a number greater than 10"))
}
while (number <= 10)

console.log("Valid number entered:", number)

// (4)

let secretNumber = 5
let guess

do{
    guess = Number(
        readline.question("Guess a number between 1 and 10:")
    )

    if(guess !== secretNumber){
        console.log("Wrong guess. Try again.")
    }
}
while (guess !== secretNumber)

console.log("correct! You guessed the number.")