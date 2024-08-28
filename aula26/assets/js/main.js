function meuEscopo() {
    const form = document.querySelector('form')
    let resultado = document.querySelector('.resultado')

    form.addEventListener("submit", calcularIMC)

    function calcularIMC (evento){
        evento.preventDefault()
        let peso = form.querySelector('#peso')
        let altura = form.querySelector('#altura')

        peso = peso.value
        altura = altura.value

        if(peso == null || peso < 40 || peso > 150){
            resultado.style.display = 'flex';
            resultado.style.background = 'lightcoral'
            resultado.innerHTML = 'Peso inválido';
        } else if (altura == null || altura < 1 || altura > 2.40){
            resultado.style.display = 'flex';
            resultado.style.background = 'lightcoral'
            resultado.innerHTML = 'Altura inválida';
        } else {
            let imc = peso / (altura ** 2);
            imc = imc.toFixed(1);

            resultado.style.display = 'flex';
            resultado.style.background = 'lightgreen'
            resultado.innerHTML = `Seu IMC é de ${imc}`;
        }
        
    };
}

meuEscopo()