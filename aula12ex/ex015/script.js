function verifica() {
    var data = new Date() ; 
    var ano = data.getFullYear();
    var fano = document.getElementById('numeroDeNascimento');
    var resultado = document.getElementById('resultado');
    if (fano.value.lenght == 0 || Number(fano.value) > ano ) {
        alert('[error] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('fsex');
        var idade = ano - Number(fano.value);
        var genero = ' '
        var img = document.createElement('img');
        img.setAttribute('id' , 'foto');
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'crianca-masculino.jpg');
            } else if ( idade < 21) {
                //jovem adulto
                img.setAttribute('src' , 'jovem-masculino.jpg');
            } else if (idade < 50) {
                //Adulto 
                img.setAttribute('src' , 'homem-adulto.jpg');
            } else {
                //idoso
                img.setAttribute('src' , 'idoso-masculino.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute("src" , "crianca-feminina.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src" , "mulher-jovem.jpg")
            } else if ( idade < 50) {
                //adulta 
                img.setAttribute("src" , "mulher-adulta.jpg");
            } else {
                //idosa
                img.setAttribute("src" , "idosa-feminina.jpg")
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.style.textAlign = 'center'
        resultado.appendChild(img);
    }
}

/*var img =  document.createrElemet('img') cria um documento
img.setAttribute('id', 'foto')
é como se fossemos no HTML e criassemos um elemento.
*/