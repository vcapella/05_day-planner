$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  function areaColor() {
    let currentMoment = moment().hours();

    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id"));

      if (blockHour < currentMoment) {
        $(this).addClass("past");
      } else if (blockHour === currentMoment) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  areaColor();

  $(".saveBtn").on("click", function () {
    let valueText = $(this).siblings(".description").val();
    let timeHourly = $(this).parent().attr("id");

    localStorage.setItem(timeHourly, valueText);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
