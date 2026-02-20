function startClock() {
  const clock = document.getElementById('clock');

  if (!clock) {
    console.error('Clock element not found: expected an element with id="clock".');
    return;
  }

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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startClock);
} else {
  startClock();
}
