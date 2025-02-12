import { AdcionarUser,AtualizarUser,RemoverUser,listausuario } from "./Usuario/function.js";

AdcionarUser('jesiel viana',' Masterdev@gmail.com','11092001');
AdcionarUser('João Paulo','Humancomputer@gmail.com','1945');


console.log('Usuários: ')
console.log(listausuario());

AtualizarUser('Masterdev@gmail.com', 'jesiel vianaNova' , '66+6');

RemoverUser('Humancomputer@gmail.com');

console.log('Usuário cadastrados depois de atualizações:')
console.log(listausuario());

