function ativarContagem () {
    tempo = setInterval(function () {

        let cronometro = document.getElementById("tempo").innerHTML;
        let regressivo = parseInt(cronometro) - 1;


        if(regressivo === 0) {
            document.getElementById("tempo").innerHTML = "Tempo Esgotado!";

            pararContagem();
        } else {
            document.getElementById("tempo").innerHTML = regressivo;
        }
    }, 1000);
};

function pararContagem() {
    clearInterval(tempo);
};