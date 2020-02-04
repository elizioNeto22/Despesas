'use strict'

const gerarItens = (list) => {

  receitas = 0
  despesas = 0
  total = 0

  list.forEach(item => {
    receitas += item.incomes
    despesas += item.expenses
    total += item.valor
  })

  attInfos2(list, filtro)
  document.querySelector('#caixa').innerHTML = `  R$ ${receitas}`
  document.querySelector('#exp').innerHTML = `  R$ ${despesas}`
  if (total < 0) {
    document.querySelector('#balancoP').style.color = '#E63946'
    document.querySelector('#balanco').style.color = '#E63946'
    document.querySelector('#balanco').innerHTML = `  R$ ${total}`
  } else {
    document.querySelector('#balancoP').style.color = 'rgb(100, 173, 65)'
    document.querySelector('#balanco').style.color = 'rgb(100, 173, 65)'
    document.querySelector('#balanco').innerHTML = `  R$ ${total}`
  }
}

let box = document.querySelector('#info')
const attInfos2 = function (list, vdd) {
  let box = document.querySelector('#info')
  let newBox = document.createElement('div')
  newBox.setAttribute('id', 'infoBox')
  box.appendChild(newBox)
  document.querySelector('#info').appendChild(newBox)

  let deletar = document.createElement('button')
  deletar.setAttribute('id', 'botaoDeletar')
  deletar.textContent = 'X'
  newBox.appendChild(deletar)
  deletar.addEventListener('click', function () {
    remover2(caixa, vdd)
    render(caixa, filtro)
    saveInfos(caixa)
  })


  let txtBox = document.createElement('div')
  txtBox.setAttribute('id', 'textoBox')
  newBox.appendChild(txtBox)

  let tit = document.createElement('h4')
  tit.setAttribute('id', 'tituloBox')
  txtBox.appendChild(tit)

  let dd = document.createElement('p')
  dd.setAttribute('id', 'descBox')
  txtBox.appendChild(dd)

  let vv = document.createElement('div')
  vv.setAttribute('id', 'valorBox')
  newBox.appendChild(vv)

  list.forEach(item => {
    tit.textContent = vdd.titulo
    dd.textContent = vdd.desc
    if (vdd.valor >= 0) {
      vv.style.color = 'rgb(100, 173, 65)'
    } else {
      vv.style.color = '#E63946'
    }
    vv.innerHTML = vdd.valor
    // hash = vdd.identificador
  })

}

const render = (list, listaBusca) => {

  if (document.querySelector('#apenasReceitas').checked) {
    const buscados = list.filter(item => item.titulo.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === true || item.desc.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === true || item.valor == listaBusca.searchedItem && item.status === true)

    document.querySelector('#info').innerHTML = ''
    buscados.forEach(vdd => attInfos2(buscados, vdd))

  } else if (document.querySelector('#apenasDespesas').checked) {
    const buscados = list.filter(item => item.titulo.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === false || item.desc.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === false || item.valor == listaBusca.searchedItem && item.status === false)

    document.querySelector('#info').innerHTML = ''
    buscados.forEach(vdd => attInfos2(buscados, vdd))
  } else {
    const buscados = list.filter(item => item.titulo.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) || item.desc.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) || item.valor == listaBusca.searchedItem)

    document.querySelector('#info').innerHTML = ''
    buscados.forEach(vdd => attInfos2(buscados, vdd))
  }
}


const savedNotes = () => {
  const infosJSON = localStorage.getItem('caixa')

  try {
    return infosJSON ? JSON.parse(infosJSON) : []
  } catch (e) {
    return []
  }

}

const saveInfos = (list) => {
  localStorage.setItem('caixa', JSON.stringify(list))
}

const remover2 = (list, vdd) => {
  const teste = list.findIndex(function (item) {
    return item.identificador === vdd.identificador
  })
  if (teste > -1) {
    list.splice(teste, 1)
  }
}


const filtroReceitas = (list) => {
  gerarItens(caixa)
  const receitas = list.filter(item => item.status === true)

  document.querySelector('#info').innerHTML = ''
  receitas.forEach(vdd => attInfos2(receitas, vdd))
}
const filtroDespesas = (list) => {
  gerarItens(caixa)
  const despesas = list.filter(item => item.status === false)
  document.querySelector('#info').innerHTML = ''
  despesas.forEach(vdd => attInfos2(despesas, vdd))

}

// Resetar ao page load
const resetarCampos = () => {
  document.querySelector('#valor').value = "R$"
  document.querySelector('#titulo').value = ""
  document.querySelector('#desc').value = ""
}