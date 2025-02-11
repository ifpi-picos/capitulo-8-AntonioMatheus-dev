const functio =require("./CommonJS/function")

function pegarValores(){
const a=Number(prompt('Digite um número: '))
const b=Number(prompt('Digite um segundo número: '))
return {a, b}
}

const valores=pegarValores()
const a=valores.a
const b=valores.b

console.log(`Soma: ${functio.soma(a, b)}`)
console.log(`Multiplicação:  ${functio.multiplicacao(a, b)}`)
console.log(`Divisão: ${functio.divisao(a, b)}`)
console.log(`Subtração: ${functio.subtracao(a, b)}`)
console.log(`Expoente: ${functio.expoente(a, b)}`)