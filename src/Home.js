import React from 'react'

export default props => {
    function calcTime(city, offset) {
        // create Date object for current location
        var d = new Date();
    
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000*offset));
    
        // return time as a string
        return nd.toLocaleString('it-IT');
    }
    var theDates = calcTime('London', '+0.0');
    // var dates = moment().format('hh');
    console.log(theDates);
    
    // Set the date we're counting down to
    var countDownDate = new Date(theDates).getTime();
    console.log(countDownDate)
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      var counting = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        // console.log(counting)
      // If the count down is over, write some text 
      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      // }
    }, 1000);
    
    return (
        <h1>
            hello{props.name}
        </h1>
    )
}
