//1. Temperature check
    //(i). If...

let temperature = 0
let weather

if (temperature < 0){
    weather = "freezing"
}
else if (temperature >= 0 && temperature <= 15){
    weather = "cold"
}
else if (temperature >= 16 && temperature <= 25){
    weather = "mild"
}
else if (temperature > 25){
    weather = "warm"
}

  //()

switch (weather){

    case "freezing":
        console.log("It is freezing")
        break

    case "cold":
        console.log("It is cold")
        break

    case "mild":
        console.log("It is mild")
        break

    case "warm":
        console.log("It is warm")
        break

    default:
        console.log("Unknown weather")
}