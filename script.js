function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        //Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'imagens/foto-manha.png'
        document.body.style.background ='#ffb24a'
        
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde        
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#753859'
    } else {
        //Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#13223F'
    }
}