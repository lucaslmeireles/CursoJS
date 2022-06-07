// try{
//     console.log('Abir um arquivo');
//     console.log('Manipulei um arquivo');
//     console.log('Fechei um arquivo');
// } catch(e){
//     console.log('Tratando o erro');
// } finally {
//     console.log('Sempre sou executado');
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }

    if (!data){
        data = new Date;
    }
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    });
}
try{
    const hora  =  retornaHora('asdfg')
} catch (e){
  //
} finally{
    console.log('Tenha um bom dia')
}