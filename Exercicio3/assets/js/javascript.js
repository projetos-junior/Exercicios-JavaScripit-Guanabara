function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img') // cria o elemento img
        img.setAttribute('id', 'foto') //atribui o ID no elemento img
        //Checa qual radio esta marcado.
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'assets/img/img-menino.png')

            } else if (idade < 21) {
                //JOvem
                img.setAttribute('src', 'assets/img/img-jovem-m.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/img/img-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/img/img-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança f
                img.setAttribute('src', 'assets/img/img-menina.png')

            } else if (idade < 21) {
                //JOvem f
                img.setAttribute('src', 'assets/img/img-jovem-f.png')

            } else if (idade < 50) {
                //Adulto f
                img.setAttribute('src', 'assets/img/img-mulher.png')

            } else {
                //idoso f
                img.setAttribute('src', 'assets/img/img-idoso-f.png')

            }
        }
        res.style.textAlign = 'center' // Centraliza o testo via JavaScript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}