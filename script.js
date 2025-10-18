
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const currentTime = Date.now();
  timeElement.textContent = `Current time (ms): ${currentTime}`;
}

updateTime();

setInterval(updateTime, 1000);
