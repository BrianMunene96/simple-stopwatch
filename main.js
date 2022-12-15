// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Event Listener
start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', pause);
reset_btn.addEventListener('click', reset);

// Add a zero if time is less than 10
function padDigits(num) {
  return num.toString().padStart(2, '0');
}

// Timer function: update timer
function timer() {
  seconds++;

  // Format our time
  let hours = Math.floor(seconds / 60);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  let secs = Math.floor(seconds % 60);

  //   secs = secs % 60;
  //   minutes = minutes % 60;

  time_el.innerText = `${padDigits(hours)}:${padDigits(minutes)}:${padDigits(
    secs
  )}`;
}

function start() {
  // if interval is running return else set interval
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function pause() {
  clearInterval(interval); // clear the setInterval and set back interval to null
  interval = null;
}

function reset() {
  // should first call the stop function and rest everything back to zero
  pause();
  seconds = 0;
  time_el.innerText = '00:00:00';
}
