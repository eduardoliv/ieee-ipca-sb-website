function rolldown() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
            document.getElementById("navbar").style.backgroundColor = "#110626";
    else
            document.getElementById("navbar").style.backgroundColor = "transparent";
}

function menuHide(e) {
    if (e.target.matches('.link'))
        document.getElementById('menu-btn').checked = false;
    else if (e.target.matches('.menu-btn')){
        document.getElementById("navbar").style.backgroundColor = "#110626";
        document.getElementById("menu").style.backgroundColor = "#110626";
    }
}    
