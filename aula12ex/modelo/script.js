function carregar(){
var mensagem = window.document.getElementById('mensagem');
var foto = window.document.getElementById('foto');
var data = new Date();
var hora = data.getHours();
var minutos = new Date()
var minuto = minutos.getMinutes()
// var hora = 19
mensagem.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;
if (hora >= 0 && hora <=12) {
    //Bom dia!
    imagem.setAttribute("src", "foto-manha.jpg"); /*sempre especifique o jpg, ou png. */
    document.body.style.background = '#F0C8A9';
} else if (hora >12 && hora <=18) {
    //Boa Tarde 
    imagem.setAttribute("src", "foto-tarde.jpg")
    document.body.style.background = '#EE7F09'
} else {
    //Boa noite
    imagem.setAttribute("src", "foto-noite.jpg")
    document.body.style.background = '#1D3C4B'
    }
}


// obs setAttribute: serve pra setar 2 atributos.
//document.body.style.background = " " 