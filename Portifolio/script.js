window.onscroll = function(){myFunction()}

function myFunction() {    
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop
    
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (winscroll / height) * 100
    
    let barra = document.getElementById('mybar')
    
    barra.style.width = scrolled + '%'
}