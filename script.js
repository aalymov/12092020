function updateElapsedTime() {
    var startDate = new Date("September 12, 2020 18:00:00").getTime();
    var currentDate = new Date().getTime();
    var timeElapsed = currentDate - startDate;
    var days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    var elapsedTimeElement = document.getElementById("elapsedTime");
    elapsedTimeElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}

updateElapsedTime();

setInterval(updateElapsedTime, 1000);
