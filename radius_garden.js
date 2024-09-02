function garden_radius(pi,radius){
    var total = pi * radius * 2 
    return Math.trunc(total)
}

console.log(garden_radius(3.14159, 14))