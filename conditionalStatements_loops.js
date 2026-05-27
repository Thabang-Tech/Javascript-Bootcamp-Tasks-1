let Temperature = 20

switch(true){

    case Temperature < 0 :
        console.log('It is freezing')
    break

    case Temperature >= 0 && Temperature <= 15 :
        console.log('It is cold')
    break

    case Temperature >= 16 && Temperature <= 25 :
        console.log('It is normal - room temperature')
    break

    default:
        console.log('It is warm')
}