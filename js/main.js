// Using moment.js library to help format the current time
// http://stackoverflow.com/questions/2696692/setinterval-vs-settimeout
// http://momentjs.com/
// .present .pm
function setPresentTimeAMorPM (momentObject) {
  if (momentObject.format("a") === "am") {
    $(".present .am").attr({ class: "indicator-light am light-on" });
    $(".present .pm").attr({ class: "indicator-light pm light-off" });
  } 
  else { // it's the PM
    $(".present .am").attr({ class: "indicator-light am light-off" });
    $(".present .pm").attr({ class: "indicator-light pm light-on" });
  }
}

function presentTimeDisplayText() {
  var currentDate = new moment();
  var mon = currentDate.format("MMM").toUpperCase();
  var day = currentDate.format("DD");
  var year = currentDate.format("YYYY");
  var hour = currentDate.format("hh");
  var min = currentDate.format("mm");
  $(".present .console-month span").text(mon);
  $(".present .console-day span").text(day);
  $(".present .console-year span").text(year);
  $(".present .console-hour span").text(hour);
  $(".present .console-min span").text(min);
  setPresentTimeAMorPM(currentDate);
}

presentTimeDisplayText();

setInterval(presentTimeDisplayText, 5000);

var altSheet = $("link[title='dark']");
altSheet.prop('disabled', true);

$('.brightness').on('click', function(event) {
  this.blur(); // to remove the annoying blue highlight that usually stays behind in mac osx chrome
  if ( altSheet.prop('disabled') === true ) {
    altSheet.prop('disabled', false);
  } else {
    altSheet.prop('disabled', true);
  }
});
