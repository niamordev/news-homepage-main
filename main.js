let openMenuMobile = document.querySelector('.open-menu-mobile')
let closeMenuMobile = document.querySelector('.close-menu-mobile')
let containerMenuMobile = document.querySelector('.container-menu-mobile')



openMenuMobile.addEventListener('click', function(){
    containerMenuMobile.style.display="block"
    closeMenuMobile.style.display="block"
    openMenuMobile.style.display="none"
})

closeMenuMobile.addEventListener('click', function(){
    containerMenuMobile.style.display="none"
    closeMenuMobile.style.display="none"
    openMenuMobile.style.display="block"
})


