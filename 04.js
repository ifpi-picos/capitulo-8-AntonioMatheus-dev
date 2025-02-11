import {somar, multiplicacao, divisao, subtracao, expoente}from './Módulos JavaScript/function.js'

function recebervalores(){
    const a=Number(prompt('Digite um número: '))
    const b=Number(prompt('Digite um segundo número: '))

    return{a, b}
}

const valores=recebervalores();

const a=valores.a
const b=valores.b

console.log(`Soma: ${somar(a,b)}`)
console.log(`Multiplicação: ${multiplicacao(a,b)}`)
console.log(`divisão: ${divisao(a,b)}`)
console.log(`Subtração: ${subtracao(a,b)}`)
console.log(`Expoente: ${expoente(a,b)}`)