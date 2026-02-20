const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  clock.textContent = formattedTime;
}

updateClock();
setInterval(updateClock, 1000);
