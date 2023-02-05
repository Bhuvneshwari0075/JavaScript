

//Switch-Case in js

//to set a alarm for different days

let day="Wednesday"

switch(day){

    case 'Monday':

                console.log("7am");
                break;
    case 'Tuesday':

                console.log("6am");
                break;
    case 'Wednesday':// it will fall through till friday

               
    case 'Thursday':// it will fall through till friday

                 
    case 'Friday':

                console.log("4am");
                break;
    
    case 'Sunday':

                  console.log("8am");
                  break;
    default:
                  console.log("Its a holiday");
                   

}

console.log("It is :"+day+"  today")