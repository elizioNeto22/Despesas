let caixa = savedNotes()

document.querySelector('#apenasReceitas').checked = false
document.querySelector('#apenasDespesas').checked = false
resetarCampos()

const filtro = {
  searchedItem: ''
}

let ident = 0
let receitas = 0
let despesas = 0
let total = 0
gerarItens(caixa)
saveInfos(caixa)

render(caixa, filtro)
// caixa.forEach(function(item){
//   attInfos(caixa)
// })


// AddInfo
let addInfo = document.querySelector('#botaoAddInfo').addEventListener('click', function (e) {
  let valorInput = document.querySelector('#valor').value
  let tituloInput = document.querySelector('#titulo').value
  let descInput = document.querySelector('#desc').value
  let receita = document.querySelector('#receita')
  let despesa = document.querySelector('#despesa')

  if (receita.checked) {
    caixa.push({
      titulo: tituloInput,
      desc: descInput,
      valor: valorInput * 1,
      incomes: valorInput * 1,
      expenses: 0,
      identificador: uuidv4(),
      status: true,
    })
    saveInfos(caixa)
    gerarItens(caixa)
    render(caixa, filtro)
    resetarCampos()
  } else if (despesa.checked) {
    caixa.push({
      titulo: tituloInput,
      desc: descInput,
      valor: valorInput - (valorInput * 2),
      expenses: valorInput - (valorInput * 2),
      incomes: 0,
      identificador: uuidv4(),
      status: false,
    })
    saveInfos(caixa)
    gerarItens(caixa)
    render(caixa, filtro)
    resetarCampos()
  }
})

// BUSCA
document.querySelector('#busca').addEventListener('input', function (e) {
  filtro.searchedItem = e.target.value
  render(caixa, filtro)
  saveInfos(caixa)
})


//Filtrar Receitas
document.querySelector('#apenasReceitas').addEventListener('change', function (e) {
  if (e.target.checked) {
    document.querySelector('#apenasDespesas').checked = false
    filtroReceitas(caixa)
    saveInfos(caixa)
  } else if (e.target.checked == false) {
    render(caixa, filtro)
  }
})

// Filtrar Despesas
document.querySelector('#apenasDespesas').addEventListener('change', function (e) {
  if (e.target.checked) {
    document.querySelector('#apenasReceitas').checked = false
    filtroDespesas(caixa)
    saveInfos(caixa)
  } else if (e.target.checked == false) {
    render(caixa, filtro)
  }
})



// const user = {
//   name: 'Elizio',
//   idade: 26
// }

// const userJason = JSON.stringify(user)

// console.log(userJason)

// localStorage.setItem('user', userJason)
// const gg = localStorage.getItem('user')
// const userParsed = JSON.parse(gg)
// console.log(`${userParsed.name} is ${userParsed.idade}`)