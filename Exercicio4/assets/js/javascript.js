function tabuada() { 
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab'); 
    let dtab = document.getElementById('dtab')
    
    if (num.value.length == 0) {
        alert ('Por Favor Digitar um Número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
       for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            dtab.innerHTML = `Tabuada do ${n}`
            item.text = `${n} X ${i} = ${n*i}`
            tab.appendChild(item)
        }
      }
    }