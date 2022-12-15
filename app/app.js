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