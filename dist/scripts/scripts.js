function rollDown() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
            document.getElementById("navbar").style.backgroundColor = "#110626";
    else
            document.getElementById("navbar").style.backgroundColor = "transparent";
}

function menuHide() {
    if(window.innerWidth <= 799){
        document.getElementById('menu-btn').checked = 0;
        document.body.classList.toggle('lock-scroll');
    }
}

function lockScroll() {
    if (document.getElementById('menu-btn').checked == 1){
        document.getElementById("navbar").style.backgroundColor = "#110626";
        document.getElementById("menu").style.backgroundColor = "#110626";
        document.body.classList.toggle('lock-scroll');
    }
    else if (document.getElementById('menu-btn').checked == 0){
        document.body.classList.toggle('lock-scroll');
    }
}