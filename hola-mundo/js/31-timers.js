window.addEventListener('load', function () {

    function intervalo() {
        // Timers 
        var tiempo = setInterval(function () {

            console.log("Set invertal ejecutado");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 500);

        return tiempo;

    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function() {
        alert("Has detenido el parpadeo");
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');

    start.addEventListener("click", function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });

});