import React from 'react'

const Timer = () => {
   function calcTime(city, offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var nd = new Date(utc + (3600000*offset));
    
    return nd.toLocaleString('en-US');
  }
    var theDates = calcTime('London', '+0.0');
    console.log('this is theDates ==>', theDates);
  var countDownDate = new Date("Nov 20, 2019 18:34:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);
 
return (
        <p id="countDown"></p>
        );
    
  }
export default Timer;