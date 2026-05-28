//Temperature check

let temperature = 0

if (temperature < 0){
    console.log('It is freezing')
}
else if (temperature >= 0 && temperature <= 15){
    console.log('It is cold')
}
else if (temperature >= 16 && temperature <= 25){
    console.log('It is mild')
}
else if (temperature > 25){
    console.log('It is warm')
}