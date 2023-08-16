
// function nomeDaFuncao(parametro){
//   // corpo da funcao
//   console.log(parametro + " da aula de prog web")

// }
// nomeDaFuncao('imprimir meu primeiro codigo')

// const imprimeNome = function(nome){console.log(nome)}

// imprimeNome("Artur")

// const imprimeNome2 = (outraFuncao,nomeDaMinhaFuncaoLouca,nome) => {
//   nomeDaMinhaFuncaoLouca(nome)
//   outraFuncao(nome)
// }

// imprimeNome2(imprimeNome,"Artur") 
// imprimeNome("Artur")

const f = (x) => x + 1
const g = (x) => x * x
f(1)
console.log("🚀 ~ file: index.ts:24 ~ f(1):", f(1))
g(1)
console.log("🚀 ~ file: index.ts:26 ~ g(1):", g(1))
f(3)
console.log("🚀 ~ file: index.ts:24 ~ f(3):", f(3))
g(3)
console.log("🚀 ~ file: index.ts:26 ~ g(3):", g(3))
console.log("f(g(3))",f(g(3)))
console.log("f(g(3))",g(g(3)))
console.log("f(console.log(3))",f("Artur"))

/**
 * vimos criacao de funcao como
 * function nome(parametro){
 * corpo
 * }
 * 
 * const nome = function(parametro){
 * corpo
 * }
 * 
 * const nome = (parametro) => {
 * corpo
 * }
 */


// TODO: preciso fazer tal coisa no proximo pomodoro


const dobra = (x) => x * 2
dobra(3)
console.log("🚀 ~ file: index.ts:56 ~ dobra(3):", dobra(3))
