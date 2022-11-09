let openMenuMobile = document.querySelector('.open-menu-mobile')
let closeMenuMobile = document.querySelector('.close-menu-mobile')
let containerMenuMobile = document.querySelector('.container-menu-mobile')



openMenuMobile.addEventListener('click', function(){
    containerMenuMobile.style.display="block"
    closeMenuMobile.style.display="block"
    openMenuMobile.style.display="none"
    document.querySelector('body').style.overflowY="hidden"
})

closeMenuMobile.addEventListener('click', function(){
    containerMenuMobile.style.display="none"
    closeMenuMobile.style.display="none"
    openMenuMobile.style.display="block"
    document.querySelector('body').style.overflowY="visible"
})


