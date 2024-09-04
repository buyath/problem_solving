function month(num){
    switch(num){
        case 1 :
            return "January";
            break;
        case 2:
            return "feb";
            break;
        case 3:
            return "march";
            break;
        case 4:
            return "april";
            break;

        case 5:
            return "may";
            break;
        case 6:
            return "june";
            break;
        case 7:
            return "july";
            break;
        case 8:
            return "augest";
            break;
        case 9:
            return "september";
            break;
        case 10:
            return "october";
            break;
        case 11:
            return "november";
            break;
        case 12:
            return "december";
            break;
        default:
            return "invalid month";
            break
    }
}

console.log(month(12))