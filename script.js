function updateElapsedTime() {
    // Задаем дату и время, с которой начнется отсчет
    var startDate = new Date("September 12, 2020 18:00:00").getTime();

    // Получаем текущую дату и время
    var currentDate = new Date().getTime();

    // Вычисляем разницу между датами
    var timeElapsed = currentDate - startDate;

    // Вычисляем количество дней, часов, минут и секунд в прошедшем времени
    var days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Выводим результат
    document.getElementById("elapsedTime").innerHTML = "" + days + "D " + hours + "H " + minutes + "M  " + seconds + "S";
}

// Вызываем функцию первый раз для инициализации
updateElapsedTime();

// Устанавливаем обновление каждую секунду (1000 миллисекунд)
setInterval(updateElapsedTime, 1000);
