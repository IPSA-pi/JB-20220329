function jergaBinaria() {
    let html = `<div class="jergaBinaria">`;
    hilo8b = document.getElementById("hiloInput")
            .value
            .split("")
            .map((char) => char
                        .charCodeAt(0)
                        .toString(2)
                        .padStart(8,0));            
    for (let hilo of hilo8b) { 
        let celda = hilo
            .split("")
            .map((char) => char == 0 ? char = `<div class="celda cero"></div>`
                                     : char = `<div class="celda uno"></div>`);
        html += `<div class="fila">${celda.join("")}</div>`;                                             
    }
    html += `</div>`;
    document.getElementById("jergaBinaria").innerHTML = html;
}