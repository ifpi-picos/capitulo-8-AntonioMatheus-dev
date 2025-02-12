let user=[]

export function AdcionarUser(nome, email, senha){
const usuario={nome, email, senha}
user.push(usuario);
console.log(`Usuario ${nome} adicionado com sucesso! `);
}

export function RemoverUser(email){
    user=user.filter(user=> user.email !==email);
    console.log(`Usuario com o email ${email} foi removido com sucesso!`);
}

export function AtualizarUser(email, NovoNome =null,NovaSenha=null){
const usuario=user.find(user => user.email===email);
if(usuario){
if(NovoNome)usuario.nome=NovoNome;
if(NovaSenha) usuario.senha=NovaSenha
console.log(`Usuario com o email ${email} foi atualizado com sucesso! `);
}else{
    console.log(`Usuario com o email${email} não encontrado.`);
}
}
export function listausuario(){
    return user;
}