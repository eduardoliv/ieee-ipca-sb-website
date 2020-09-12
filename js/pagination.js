// Default values
var current_page = 1;
var records_per_page = 2;
/*
var objects = [
    {
        event_state: "canceled",
        img_path: "./images/icode_2020.png",
        post_date: "Mon, 03 Feb 2020 19:05:14",
        title: "iCode 2020",
        desc: "The IEEE IPCA Student Branch, in conjunction with the Computer Systems Engineering course will organize a new edition of the \"iCode\" event. The \"iCode\" consists of a test with several programming challenges over three days. In addition, workshops open to the public on various topics in the field of Computing.",
        event_place: "IPCA EST Auditorium",
        event_date: "Thu, 11 Fev 2020",
        link: "https://www.facebook.com/events/2738187102935753/"
    },
    {
        event_state: "",
        img_path: "./images/c_workshop_2019.jpg",
        post_date: "Wed, 16 Oct 2019 00:00:00",
        title: "C Workshop",
        desc: "The IEEE IPCA Student Branch will organize a workshop dedicated to the C language on 13th November at 14:00h. If you are at the beginning of your journey in the world programming and you intend to learn a little more than this language to offer, join us!",
        event_place: "IPCA EST Sala 1",
        event_date: "Wed, 13 Nov 2019",
        link: "https://www.facebook.com/IEEE-IPCA-Student-Branch-103334174468617/"
    },
    {
        event_state: "",
        img_path: "./images/icode_2020.png",
        post_date: "Mon, 22 Jan 2040 19:05:14",
        title: "zCode 2040",
        desc: "The IEEE IPCA Student Branch, in conjunction with the Computer Systems Engineering course will organize a new edition of the \"iCode\" event. The \"iCode\" consists of a test with several programming challenges over three days. In addition, workshops open to the public on various topics in the field of Computing.",
        event_place: "IPCA EST Auditorium",
        event_date: "Thu, 11 Fev 2020",
        link: "https://www.facebook.com/events/2738187102935753/"
    },
    {
        event_state: "upcoming",
        img_path: "./images/c_workshop_2019.jpg",
        post_date: "Wed, 55 Dec 2552 00:00:00",
        title: "F Workshop",
        desc: "The IEEE IPCA Student Branch will organize a workshop dedicated to the C language on 13th November at 14:00h. If you are at the beginning of your journey in the world programming and you intend to learn a little more than this language to offer, join us!",
        event_place: "IPCA EST Sala 1",
        event_date: "Wed, 13 Nov 2019",
        link: "https://www.facebook.com/IEEE-IPCA-Student-Branch-103334174468617/"
    }
];*/

var objects = ""; 


function changePage(page) {
    // Smaller devices get only 1 record per page
    if (window.innerWidth <= 799)
        records_per_page = 1;

    var next_btn = document.getElementById("next_btn"), prev_btn = document.getElementById("prev_btn"), flex_content = document.getElementById("listingTable"), flex_span = document.getElementById("page");

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    flex_content.innerHTML = "";

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
        var event_formatted = "";
        if (objects[i].event_state === "upcoming")
            event_formatted = "<div class=\"upcoming-event\"><i class=\"fas fa-tasks\"></i>&nbsp;&nbsp;&nbsp;Upcoming</div>";
        if (objects[i].event_state === "canceled")
            event_formatted = "<div class=\"canceled-event\"><i class=\"fas fa-tasks\"></i>&nbsp;&nbsp;&nbsp;Canceled</div>";
        flex_content.innerHTML += "<div class=\"col padding-content\"> <div class=\"card clearfix\">" + event_formatted + "<img src=\"" + objects[i].img_path + "\">" + "<div class=\"container\"> <h5> <text-color-alt>" + objects[i].post_date + "</text-color-alt> </h5> <div class=\"limiter\"> <p> <text-color>" + objects[i].title + "</text-color> </p> <h4> <text-color>" + objects[i].desc + "</text-color> </h4> </div> <hr> <h4> <text-color> <i class=\"fas fa-map-marker-alt\"></i> &nbsp;&nbsp;&nbsp;" + objects[i].event_place + "</text-color> </h4> <h4> <text-color> <i class=\"far fa-clock\"></i> &nbsp;&nbsp;&nbsp;" + objects[i].event_date + "</text-color> </h4> <hr> <div class=\"row\"> <div class=\"col flex-adjust padding-content-tb\"> <button class=\"button info\" onclick=\"location.href='" + objects[i].link + "'\"> <span>More info</span> </button> </div> </div> </div> </div> </div>";
    }

    flex_span.innerHTML = page;

    (page == 1) ? (prev_btn.style.pointerEvents = "none", prev_btn.style.color = "lightgray") : (prev_btn.style.pointerEvents = "", prev_btn.style.color = "#000000");

    (page == numPages()) ? (next_btn.style.pointerEvents = "none", next_btn.style.color = "lightgray") : (next_btn.style.pointerEvents = "", next_btn.style.color = "#000000");

}

async function getDataJSON() {
    let response = await fetch('https://ipca.ieee-pt.org/dist/data/events.json');
    let data = await response.json();
    objects = data;
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