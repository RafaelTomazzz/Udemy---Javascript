//Objetos

const pessoa1 = {
    nome: "Rafael",
    sobrenome: "Tomaz",
    idade: 18
};

console.log(pessoa1.nome)

function criarPessoa (nome, sobrenome, idade)
{
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criarPessoa('Rafael', 'Tomaz', 18)

console.log(pessoa2.nome)