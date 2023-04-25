function showMenu(){
    let navMobile = document.querySelector('#mobile-nav')
    let btnMobile = document.querySelector('.icon')
    navMobile.classList.toggle('active')
    if (navMobile.classList.contains('active')){
        btnMobile.src='assets/close.svg'
    } else {
        btnMobile.src='assets/menu.svg'
    }
}

// Exibe o botão quando o usuário rolar a página para baixo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Faz a rolagem suave para o topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
