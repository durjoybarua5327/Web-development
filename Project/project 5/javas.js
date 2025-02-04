function rotateHands() {
    const currentDate = new Date();
    const hours = currentDate.getHours() % 12;
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
  
    const hourRotation = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
    const minuteRotation = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
    const secondRotation = seconds * 6; // 6 degrees per second
  
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
  
    document.querySelector('.hour-hand .digit').textContent = padZero(hours);
    document.querySelector('.minute-hand .digit').textContent = padZero(minutes);
    document.querySelector('.second-hand .digit').textContent = padZero(seconds);
  }
  
  function padZero(num) {
    return num < 10 ? '0' + num : num;
  }
  
  setInterval(rotateHands, 1000);
  