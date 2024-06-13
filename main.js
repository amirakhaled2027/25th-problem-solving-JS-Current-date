//Write a JavaScript function to get the current date 
function getCurrentDate() {

    var date = new Date();
  
    var day = date.getDay();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    var newDate =  day + "/ " + month + "/ " + year;
    document.getElementById("date").innerHTML = newDate;
  
  }
  getCurrentDate()