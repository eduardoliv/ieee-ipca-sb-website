function navbar() {
    if (window.screen.availWidth > 768) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
            document.getElementById("navbar").style.backgroundColor = "#1c073b";
        else
            document.getElementById("navbar").style.backgroundColor = "transparent";
    }
}

function menuHide(e) {
    if (e.target.matches('.link'))
        document.getElementById('menu-btn').checked = false;
}    