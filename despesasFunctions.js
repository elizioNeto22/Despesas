const gerarItens = function (list) {

  receitas = 0
  despesas = 0
  total = 0

  list.forEach(function (item) {
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
  let hash
  let editar = document.createElement('button')
  editar.setAttribute('id', 'botaoEditar')
  editar.textContent = 'editar'
  editar.addEventListener('click', function (e) {
    location.assign(`edit.html#${hash}`)

  })
  newBox.appendChild(editar)

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

  list.forEach(function (item) {
    tit.textContent = vdd.titulo
    dd.textContent = vdd.desc
    if (vdd.valor >= 0) {
      vv.style.color = 'rgb(100, 173, 65)'
    } else {
      vv.style.color = '#E63946'
    }
    vv.innerHTML = vdd.valor
    hash = vdd.identificador
  })

}



const render = function (list, listaBusca) {
  gerarItens(caixa)
  if (document.querySelector('#apenasReceitas').checked) {
    const buscados = list.filter(function (item) {
      return item.titulo.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === true || item.desc.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === true || item.valor == listaBusca.searchedItem && item.status === true
    })
    document.querySelector('#info').innerHTML = ''
    buscados.forEach(function (vdd) {
      attInfos2(buscados, vdd)
    })
  } else if (document.querySelector('#apenasDespesas').checked) {
    const buscados = list.filter(function (item) {
      return item.titulo.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === false || item.desc.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) && item.status === false || item.valor == listaBusca.searchedItem && item.status === false
    })
    document.querySelector('#info').innerHTML = ''
    buscados.forEach(function (vdd) {
      attInfos2(buscados, vdd)
    })
  } else {
    const buscados = list.filter(function (item) {
      return item.titulo.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) || item.desc.toLowerCase().includes(listaBusca.searchedItem.toLowerCase()) || item.valor == listaBusca.searchedItem
    })
    document.querySelector('#info').innerHTML = ''
    buscados.forEach(function (vdd) {
      attInfos2(buscados, vdd)
    })
  }

}

const savedNotes = function () {
  const infosJSON = localStorage.getItem('caixa')
  if (infosJSON != null) {
    return JSON.parse(infosJSON)
  } else {
    return []
  }
}

const saveInfos = function (list) {
  localStorage.setItem('caixa', JSON.stringify(list))
}

// limpar



const remover = function (list) {
  ident = 0

  const idid = list.forEach(function (item) {
    ident = item.identificador
    return ident
  })

  const teste = list.findIndex(function (item) {
    return item.identificador === ident
  })


  if (teste > -1) {
    list.splice(teste, 1)
  }

}
const remover2 = function (list, vdd) {
  const teste = list.findIndex(function (item) {
    return item.identificador === vdd.identificador
  })
  if (teste > -1) {
    list.splice(teste, 1)
  }
}




const filtroReceitas = function (list) {
  gerarItens(caixa)
  const receitas = list.filter(function (item) {
    return item.status === true
  })
  document.querySelector('#info').innerHTML = ''
  receitas.forEach(function (vdd) {
    attInfos2(receitas, vdd)
  })
}
const filtroDespesas = function (list) {
  gerarItens(caixa)
  const despesas = list.filter(function (item) {
    return item.status === false
  })
  document.querySelector('#info').innerHTML = ''
  despesas.forEach(function (vdd) {
    attInfos2(despesas, vdd)
  })
}


// Resetar ao page load
const resetarCampos = function () {
  document.querySelector('#valor').value = "R$"
  document.querySelector('#titulo').value = ""
  document.querySelector('#desc').value = ""
}