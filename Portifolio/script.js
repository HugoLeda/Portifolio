window.onscroll = function(){ myFunction() }
window.onresize = function(){ sideBarControl() }

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
    let input = window.document.querySelector('.check') 
    if (input.checked) {
        alert('gtd6sf')
    }
}