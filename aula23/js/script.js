function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1)
    //     console.log('Foi enviado')
    // };
    let lista = new Array;
    let contador = 0
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        lista.push(pessoa);
        resultado.innerHTML += `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}<br/>`
        console.log(lista)
        contador ++;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();