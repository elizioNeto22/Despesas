// gerarItens(caixa)
// saveInfos(caixa)
// 

// const teste = new Date('2001-02-21T06:25:01')
// // const teste2 = Date.now()
// const teste3 = new Date('2001-02-21T06:26:01')
// // console.log(teste.getTime())
// // console.log(teste2)
// // console.log(teste3)
// const timestamp1 = teste.getTime()
// const myDate = new Date(timestamp1)
// // console.log(myDate)

// const timestamp3 = teste3.getTime()
// // const myDate3 = new Date(timestamp3)
// console.log(timestamp1)
// console.log(timestamp3)
// if (timestamp3 < timestamp1) {
//     console.log(teste3.toString())
// } else if (timestamp1 < timestamp3) {
//     console.log(teste.toString())
// }
// // console.log(myDate3.getMilliseconds())

// //Fazer push com myDate(getMIlliseconds)
// // A PARTE FINAL DO TESTE3 É O MESMO DOS OUTROS 2 


// // const user = {
// //   name: 'Elizio',
// //   idade: 26
// // }

// // const userJason = JSON.stringify(user)

// // console.log(userJason)

// // localStorage.setItem('user', userJason)
// // const gg = localStorage.getItem('user')
// // const userParsed = JSON.parse(gg)
// // console.log(`${userParsed.name} is ${userParsed.idade}`)




// // testar let caixa = JSON.parse(localStorage.getItem('caixa'))

// /* Para ARRAY: tipo o forEach
// function exemplo (){
//   for(item of array){
//     clg(item) → vai retornar para item cada item do array, uma callback
//   }*/


// ///////////////////////////////////////////////////////////////////////////
// // MOMENT LIB
// // const now = moment()
// // // 1º é a quantidade e o 2º é o valor
// // const niver = moment("1993-04-22")

// // console.log(niver.format("MMM D, YYYY"))







////// FILTRO


// const funcaoFiltro = (list, sortBy) => {
//   if (sortBy === 'ultimoPrimeiro') {
//     console.log(list + 'ultimo')
//   } else {
//     console.log('else')
//   }

// }


/// FILTRO HTML

/*  <!-- <select name="filtragem" id="filtragem">
        <option value="ultimoPrimeiro">Último Criado</option>
        <option value="primeiroPrimeiro" selected>Primeiro Criado</option>
        <option value="Maior Valor" id="">Maior Valor</option>
        <option value="Menor Valor" id="">Menor Valor</option>
      </select> --> */




// Filtrar por Tempo de criação

// document.querySelector('#filtragem').addEventListener('change', function (e) {
//   filtro.sorted = e.target.value
//   render(caixa, filtro)
//   saveInfos(caixa)

// })