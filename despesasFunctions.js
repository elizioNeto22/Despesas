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

// const funcaoFiltro = function (list, sortBy) {
//   if (sortBy === 'ultimoPrimeiro') {
//     return list.sort(function (a, b) {
//       if (a.criacao < b.criacao) {
//         return 1
//       } else if (a.criacao > b.criacao) {
//         return -1
//       } else {
//         return 0
//       }
//     })
//   } else if (sortBy === 'primeiroPrimeiro') {
//     return list.sort(function (a, b) {
//       if (a.criacao < b.criacao) {
//         return -1
//       } else if (a.criacao > b.criacao) {
//         return -1
//       } else {
//         return 0
//       }
//     })
//   } else {
//     return caixa
//   }
// }



const render = function (list, listaBusca) {

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
const filtroUltimo = function (list) {
  list.sort(function (a, b) {
    if (a.criacao < b.criacao) {
      return 1
    } else if (a.criacao > b.criacao) {
      return -1
    } else {
      return 0
    }
  })
}


// Resetar ao page load
const resetarCampos = function () {
  document.querySelector('#valor').value = "R$"
  document.querySelector('#titulo').value = ""
  document.querySelector('#desc').value = ""
}



// gerarItens(caixa)
// saveInfos(caixa)
// 

const teste = new Date('2001-02-21T06:25:01')
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