function calcularFibonacci() {
    let numero = document.getElementById("numero").value;
    let fibonacci = [0, 1];
    
    for (let i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    /*scriptlevante una alerta consultándole al usuario si desea eliminar dicha tarjeta*/
    fibonacci.forEach((element, index) => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = element;
        tarjeta.addEventListener("click", () => {
            if (confirm("¿Desea eliminar esta tarjeta?")) {
                resultado.removeChild(tarjeta);
            }
        });
        resultado.appendChild(tarjeta);
    });
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    calcularFibonacci();
});