function start(){
  displayNewTimerValue()
  setInterval(function() { displayNewTimerValue() }, 1000)
}
function displayNewTimerValue(){
  const time = calculateNewTimeValue()
  html = "<span>"
  html += time
  html += "</span>"
  document.querySelector("#timer").innerHTML = html
}

function calculateNewTimeValue(){
  const now = new Date().getTime();
  const countDownDate = new Date("2024-09-10")
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = hours < 10 ? `0${hours}` : hours
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes < 10 ? `0${minutes}` : minutes
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? `0${seconds}` : seconds

  return `${days} dias, ${hours}:${minutes}:${seconds}`
}

start()
