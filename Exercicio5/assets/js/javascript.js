let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Verifica se o numero digitado é de 1 a 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }    
}
 //Verifica se o numero já esta nalista
 function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
        if (isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)
            res.innerHTML = ''
        } else {
            alert('Valor inválido ou já encontrado na lista.')
        }
        num.value = ''
        num.focus()
    }
    function finalizar(){
        if (valores.length == 0) {
            alert('Adicionar Valores antes de finalizar')
        } else {
            let tot = valores.length // Mostrar quantidade de array cadastrado
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0 
            let media = 0
            //Verifica o maior e menor numerro cadastrado
            for(let pos in valores){
                soma += valores[pos]// Soma todos os numeros
                if (valores [pos] > maior)
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot// Media de todos os números digitados
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, tem ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
            res.innerHTML += `<p>A média dos valores digitgados é ${media}.</p>`
        }
    }