// Dados primitivos

//Strings
const nome = 'Nome'
const nome1 = 'Nome1'
const nome2 = 'Nome2'

//Num
const num = 1;
const decimal = 1.1;

//Undifeid

let nomeAluno // não aponta pra local nenhum na memoria
let sobrenomeAluno = null;

//Booleano

const boolean = true;
let aprovado = true;
aprovado = false;

console.log(typeof nome,typeof num,typeof nomeAluno,typeof boolean);

//Array

const a = [1, 2];
const b = a;

console.log(a, b)

b.push(3)
console.log(a, b)