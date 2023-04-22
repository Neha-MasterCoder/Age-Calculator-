function find_age(){

var date = document.getElementById('date').value;
console.log(date)

var month = document.getElementById('month').value;
console.log(month)

var year = document.getElementById('year').value;
console.log(year)


    var current = new Date();
    console.log(current)

    var currentDate = current.getDate();
    console.log(currentDate)

    var currentMonth = current.getMonth();
    console.log(currentMonth+1)

    var currentYear = current.getFullYear();
    console.log(currentYear)
    if(year>currentYear || month>12 || date>31 ){
        document.getElementById("result").innerHTML='Invalid input ( Are you sure about that  )'
    }
    else{
        var ageyear = currentYear-year;
        var agemonth =0;
        console.log (ageyear,"years old ") 
        if(month>currentMonth){
            ageyear = ageyear -1;
            currentMonth = currentMonth +12;
        }
        var agemonth=currentMonth-month;
        document.getElementById('result').innerHTML=`You are ${ageyear} years ${agemonth} months old`

     }
       
    
}

// Problem Statement :

// Neha has 2 dated containing month , day , year 
// one is her date of birth and ither is the current date 
// find th logic how to calculat the age of neha by subtracting the current date from date of birth to find neha's age?