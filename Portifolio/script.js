window.onscroll = function(){ myFunction() }
window.onresize = function(){ sideBarControl() }
var teste = 1

function myFunction() {      
    let barra = document.getElementById('mybar')  
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop    
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (winscroll / height) * 100
    barra.style.width = scrolled + '%'     
}

function sideBarControl() {        
    let width =  window.innerWidth  
    if (width < 650) {
        var sideBar = document.getElementById('sidebar')
        if (sideBar.parentNode) {
            sideBar.parentNode.removeChild(sideBar)
        }        
    } else {
        window.location.reload(true)
    }    
}

function openMenu(){    
    let menuMobile = document.querySelector('.menu-mobile')
    menuMobile.style.right = 0    
}