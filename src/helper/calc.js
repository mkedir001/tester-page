import React from 'react'

// export default function calc() {
    export default function calcTime (city, offset) {
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        var nd = new Date(utc + (3600000*offset));
        
        return nd.toLocaleString('en-US');
      }
    // return (
    //     <div>
            
    //     </div>
    // )
// }
