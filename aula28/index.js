//Objeto Date

// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras);
// console.log(data.toString())

// const data = new Date(2024, 7, 28, 15) // os meses comecam do 0 - entao janeiro e 0 fevereiro e 1 etc

const data = new Date('2024-08-28 15:52')
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1)
console.log('Mes', data.getFullYear())
console.log('Mes', data.getHours())
console.log('Dia da semana', data.getDay())