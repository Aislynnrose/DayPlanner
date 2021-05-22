$( document ).ready(function() {
  console.log( "ready!" );
let block = $('col-md-8')
  function currentTime() {
    let hour = moment().hours();
    console.log(hour)
    $( ".time-block" ).each(function() {
      let blockTime = $(this);
      console.log(blockTime);
      if (hour < blockTime) {
        $(this).setClass( ".past")
      }
      else if (hour == blockTime){
        $(textarea).setClass(".present")
        // hour is == to set present
      }
      else if (hour > blockTime){
        // hour is more set 
      }
    });
  }
  currentTime();
/* 
set up text content to allow input
set up save button
*/

});
