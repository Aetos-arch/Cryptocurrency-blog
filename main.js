// Allows hovering over elements and being redirected to a new page

document.querySelectorAll(".profile").forEach(e => e.addEventListener("click", function (event) {
    let target = event.target;
    while (target.getAttribute("class") != "profile") {
        target = target.parentElement;
    }
    window.location.href = target.dataset.url;
}))

document.querySelectorAll(".article").forEach(e => e.addEventListener("click", function (event) {
    let target = event.target;
    while (target.getAttribute("class") != "article") {
        target = target.parentElement;
    }
    window.location.href = target.dataset.url;
}))

document.querySelectorAll(".next").forEach(e => e.addEventListener("click", function (event) {
    let target = event.target;
    while (target.getAttribute("class") != "next") {
        target = target.parentElement;
    }
    window.location.href = target.dataset.url;
}));
