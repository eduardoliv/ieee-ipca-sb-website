
function navbarResize() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.padding = "10px 0px";
        document.getElementById("navbar").style.backgroundColor = "#1c073b";
        document.getElementById("logo").style.visibility = "visible";
    } else {
        document.getElementById("navbar").style.padding = "40px 0px";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("logo").style.visibility = "hidden";
    }
}

function menuIcon() {
    var x = document.getElementById("topNavigation");
    if (x.className === "nav-content") {
      x.className += " responsive";
    } else {
      x.className = "nav-content";
    }
  }