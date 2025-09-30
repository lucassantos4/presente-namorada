

var stitchheader = document.getElementById('stitchfofinho')
 stitchheader.onmouseover = function () {
    stitchheader.src = "images/gifstitchcoracao.gif"; 
}

  stitchheader.onmouseout = function () {
    stitchheader.src = "images/gifstitchcoracao.png"; 
  }
 //pagina coleção
function playVideo() {
            // Esconde a thumbnail
    document.querySelector('.thumb').style.opacity = '0'
    document.querySelector('.thumb').style.display = 'none'

}

var fotos = document.getElementsByClassName('fotos');

for (var i = 0; i < fotos.length; i++) {
  fotos[i].onmouseenter = function () {
    
    document.getElementsByClassName('fotosescondidas').style.visibility = 'visible'
  }
  
}