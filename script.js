$( document ).ready(function() {
  console.log( "ready!" );
let block = $('col-md-8');
// set the current time and date
const $currentDate = $("#currentDay");
$currentDate.text(moment().format("dddd, MMMM Do, YYYY"));

$innerTextArea = document.querySelectorAll("textarea");

  function currentTime() {
    // setting hour to = military time current hour
    let hour = moment().hours();
    console.log(hour)
    // cycle through all the time blocks
    $(".time-block" ).each(function() {
      // by checking the id listed in military time for the divs
      let blockTime = $(this).attr('id');
      console.log(blockTime);
      // if the current hour is less than the ID then set to future class 
      if (hour < blockTime) {
        $(this).addClass( ".future");
      }
      // if the current hour is equal to the ID then set to present class
      else if (hour == blockTime){
        $(this).addClass(".present");
      }
      // if the current hour is more than the ID then set to past class
      else if (hour > blockTime){
        $(this).addClass(".past");
      }
    });
  }
  // run the current time function
  currentTime();
//save input in local storage
function storeTask() {
  const tasks = $(this).siblings("textarea");
  const taskHour = tasks.attr("id");
  localStorage.setItem(taskHour, tasks.val());
  alert("Task Saved!");
}
// set task to storage
function getStoredTask() {
  for (let i = 0; i < $innerTextArea.length; i++) {
      let storedTasks = localStorage.getItem($innerTextArea[i].id);
      $innerTextArea[i].textContent = storedTasks;
  }
}
// recall task from storage to show in text area
getStoredTask();
const $saveBtns = $(".saveBtn");
for (let i = 0; i < $saveBtns.length; i++) {
  $saveBtns[i].addEventListener("click", storeTask);
}
});
