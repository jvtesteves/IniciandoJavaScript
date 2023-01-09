// primeiro vamos fazer de um jeito que aparetmente nao apresente diferenca

console.log('deu erro')
console.error('deu erro')

//agora vejamos que ja muda um pouco se fizermos da seguinte maneira
//aqui vem um pouco da orientacao a objetos, uma classe esta sendo criada

console.log('deu erro')
console.error(new Error('deu erro'));