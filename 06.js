let usuario=(prompt('Digite um número: '))

console.log(Math.log(usuario))
console.log(Math.floor(Math.log(usuario)))

console.log(Math.log10(usuario))
console.log(Math.floor(Math.log10(usuario)))

console.log(Math.log2(usuario))
console.log(Math.floor(Math.log2(usuario)))



let base=Number(prompt('Digite um número'))
let x=Number(prompt('Digite um número'))

function logBase(x,base){
    return Math.log(x)/Math.log(base)
}
let resultado=Math.floor(logBase(base, x))
console.log(logBase(base,x))
console.log(resultado)
