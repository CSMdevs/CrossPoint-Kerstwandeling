function getTimeRemaining(endtime) {
  
  var countDownDate = new Date("Dec 23, 2017 18:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  //var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((distance / 1000) % 60);
  var minutes = Math.floor((distance / 1000 / 60) % 60);
  var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  return {
    'total': distance,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);