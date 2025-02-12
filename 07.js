import convert from "convert"

function BytesBits(Bytes) {
    return convert(Bytes, 'B').to('bits');
}
console.log(`1024 Bytes é igual a: ${BytesBits(1024)} bits`);

function DiasMinutos(dias){
return convert(dias, 'days').to('minutes')
}
console.log(`4 Dias convertido em minutos:${(DiasMinutos(4*24/24))} Minutos`)

