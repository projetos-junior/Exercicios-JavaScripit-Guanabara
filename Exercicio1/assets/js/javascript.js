function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
        if(hora >= 0 && hora <12){
        //Bom Dia
        msg.innerHTML = `Agora são ${hora}:${minuto} Horas - Bom dia`
        document.body.style.background = '#e0dfcb'
        img.src = 'assets/img/imgmanha.png'
    }else if (hora >= 12 && hora <= 18){
        //Boa Tarde
        msg.innerHTML = `Agora são ${hora}:${minuto} Horas - Boa Tarde`
        document.body.style.background = '#866e38'
        img.src = 'assets/img/imgtarde.png'
    }else{
        //Boa Noite
        msg.innerHTML = `Agora são ${hora}:${minuto} Horas - Boa Noite`
        document.body.style.background = '#501800'
        img.src = 'assets/img/imgnoite.png'
    }
}