let contador = 0;
let click = 0;
let intervalo = 0;

setInterval(() => {
    let data = new Date();
    document.getElementById("data").textContent = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
}, 1000); // Mantém o script ativo

function iniciar() {
    contador = 0; // Reseta o contador ao iniciar
    //if(intervalo) return; // Evita iniciar mais de uma vez
    intervalo = setInterval(() => {
        contador++;
        document.getElementById("cronometro").textContent = contador;
        document.body.classList.toggle('cor');
        //let data = new Date();
        //document.getElementById("data").textContent = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();//.toLocaleDateString() + " " + data.toLocaleTimeString();
    }, 1000)

}

function parar() {
    clearInterval(intervalo);
    intervalo = null; // Reseta o intervalo para permitir reiniciar
}

function zerar() {
    let i = 5;

    const intervalo = setInterval(() => {
        document.getElementById("mensagem").textContent = "Contador zerando em " + i + "s";

        if (i === 0) {
            clearInterval(intervalo); // Para o intervalo
            parar(); // Supondo que essa função exista
            let contador = 0;
            document.getElementById("cronometro").textContent = contador;
            document.getElementById("mensagem").textContent = "";
            document.getElementById("data").textContent = "";
        }

        i--;
    }, 1000); // Atualiza a cada segundo
}