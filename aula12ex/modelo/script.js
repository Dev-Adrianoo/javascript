function carregar(){
var mensagem = window.document.getElementById('mensagem');
var foto = window.document.getElementById('foto');
var data = new Date();
// var hora = data.getHours();
var hora = 19
mensagem.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora <12) {
    //Bom dia!
    foto.src = 'foto-manha'
} else if (hora >12 && hora <18) {
    //Boa Tarde 
    foto.src = 'foto-tarde'
} else {
    //Boa noite
    
    }
}