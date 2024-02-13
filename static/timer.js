function startCountdown(duration, display) {
  var timer = duration, minutes, seconds;
  var countdownInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if (--timer < 0) {
      clearInterval(countdownInterval); 
      window.location.href = "/endscreen?score=" + counter;
    }
  }, 1000);
}

var timerDisplay = document.getElementById('timer');
var duration = 15;
startCountdown(duration, timerDisplay);
