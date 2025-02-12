import convert from "convert"


function DiasMinutos(dias){
return convert(dias, 'days').to('minutes')
}
console.log(`4 Dias convertido em minutos:${(DiasMinutos(4*24/24))} Minutos`)

