document.addEventListener("DOMContentLoaded", function () {
   
    var countdownContainer = document.createElement("div");
    countdownContainer.id = "offer-countdown";
    

    var countdownTitle = document.createElement("h2");
    countdownTitle.textContent = "Oferta de Navidad: ¡Quedan!";
    
   
    var countdownElement = document.createElement("div");
    countdownElement.id = "countdown";


    countdownContainer.appendChild(countdownTitle);
    countdownContainer.appendChild(countdownElement);

    
    document.body.prepend(countdownContainer); 

   
    var offerEndDate = new Date("December 25, 2025 08:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var timeLeft = offerEndDate - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (timeLeft < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "¡La oferta ha terminado!";
        }
    }, 1000);
});
