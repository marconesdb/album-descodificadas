// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém a imagem e o elemento modal
var images = document.getElementsByClassName('image');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Para cada imagem adiciona um evento de clique
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no <span>, fecha o modal
span.onclick = function() { 
    modal.style.display = "none";
}
