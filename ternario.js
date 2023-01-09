// so vai liberar bebida se for maior que 18 anos

const idadeMinima = 18;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima){
//     console.log('cerveja')
// }else{
//     console.log('suco')
// }

// funciona da mesma forma que o if
//cuidado ao usa-lo
// boa pratica usa-lo para comparacoes curtas, simples

console.log(idadeCliente >= idadeMinima ? 'cerveja' : 'suco')  