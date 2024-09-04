function thetre(age){
    if (age < 5){
        return "free"
    }
    else if (age >= 5 && age <= 12){
        return "10"
    }
    else if (age >=13 && age <= 64){
        return "20"
    }
    else{
        return "15"
    }
}
console.log(thetre(12))
