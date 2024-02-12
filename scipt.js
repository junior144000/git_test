function add7(random){
return (random+7);
}

console.log(add7(3)); 

function multiply(a,b){
    return( a*b);
}

console.log(multiply(2,5));



function capitalize(name){
    return(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase())
}


console.log(capitalize('ANDREW'))

function lastLetter(place){
    let letter= place.length;
    return(place.charAt(letter-1))
}

console.log(lastLetter('suriname'))