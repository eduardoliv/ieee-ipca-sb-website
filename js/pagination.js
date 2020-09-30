// Default values
var current_page = 1;
var records_per_page = 1;

var objects = [];


function changePage(page) {
    // Devices with width > 799px get 2 records per page
    if (window.innerWidth > 799)
        records_per_page = 2;

    var next_btn = document.getElementById("next_btn"), prev_btn = document.getElementById("prev_btn"), flex_content = document.getElementById("listingTable"), flex_span = document.getElementById("page");

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    flex_content.innerHTML = "";

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
        var event_formatted = "";
        if (objects[i].event_state == "upcoming")
            event_formatted = "<div class=\"upcoming-event\"><i class=\"fas fa-tasks\"></i>&nbsp;&nbsp;&nbsp;Upcoming</div>";
        if (objects[i].event_state == "canceled")
            event_formatted = "<div class=\"canceled-event\"><i class=\"fas fa-tasks\"></i>&nbsp;&nbsp;&nbsp;Canceled</div>";
        flex_content.innerHTML += "<div class=\"col padding-content\"> <div class=\"card clearfix\">" + event_formatted + "<img src=\"" + objects[i].img_path + "\">" + "<div class=\"container\"> <h5> <text-color-alt>" + objects[i].post_date + "</text-color-alt> </h5> <div class=\"limiter\"> <p> <text-color>" + objects[i].title + "</text-color> </p> <h4> <light> <text-color>" + objects[i].desc + "</text-color> </light> </h4> </div> <hr> <h4> <text-color> <i class=\"fas fa-map-marker-alt\"></i> &nbsp;&nbsp;&nbsp;" + objects[i].event_place + "</text-color> </h4> <h4> <text-color> <i class=\"far fa-clock\"></i> &nbsp;&nbsp;&nbsp;" + objects[i].event_date + "</text-color> </h4> <hr> <div class=\"row\"> <div class=\"double-col padding-content-tb\"> <button class=\"button info margin-right\" onclick=\"location.href='" + objects[i].info_link + "'\"> <span>More Info</span> </button> </div> <div class=\"double-col padding-content-tb\"> <button class=\"button register margin-left\" onclick=\"location.href='" + objects[i].register_link + "'\"> <span>Register</span> </button> </div> </div> </div> </div> </div> </div>";
    }

    flex_span.innerHTML = page;

    (page == 1) ? (prev_btn.style.pointerEvents = "none", prev_btn.style.color = "lightgray") : (prev_btn.style.pointerEvents = "", prev_btn.style.color = "#000000");

    (page == numPages()) ? (next_btn.style.pointerEvents = "none", next_btn.style.color = "lightgray") : (next_btn.style.pointerEvents = "", next_btn.style.color = "#000000");
}

async function getDataJSON() {
    try {
        let response = await fetch('https://raw.githubusercontent.com/eduardoliv/ieee-ipca-sb-website/master/data/events.json');
        let data = await response.json();
        objects = data.events;
        changePage(1);
    }
    catch (error) {
        alert(error); // failed to fetch
    }
}

function previousPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function numPages() {
    return Math.ceil(objects.length / records_per_page);
}