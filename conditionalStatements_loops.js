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