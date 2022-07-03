const menuToggle = document.querySelector(".menu");
const menuItem = document.querySelector (".nav-list");
const closeNav = document.querySelector(".closenav")
const howItWork = document.querySelector(".bill");
const navPackage = document.querySelector(".nav-package");
const navTestimonial = document.querySelector(".nav-testimony");
const smallBtn = document.querySelector(".sm-button");
const accordionAnswer = document.querySelector(".accordion-answer");
const accordion = document.querySelectorAll(".accordion-sub").length;


for (var i = 0; i< accordion; i++) {
    const accordion = document.querySelectorAll(".accordion-sub")[i];
    accordion.addEventListener("click", (e) => {
        console.log(accordionContainer);
        
    const visibilty = accordion.lastElementChild.getAttribute("data-visible");
    var accordionContainer = accordion.previousElementSibling;
    if(visibilty === "true") {
        accordion.lastElementChild.setAttribute("data-visible", false);
        accordion.classList.add("accordion-colour");
    }else if(visibilty === "false") {
        accordion.lastElementChild.setAttribute("data-visible", true);
        accordion.classList.remove("accordion-colour");
    }
    });
    
}

howItWork.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }
})

smallBtn.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }
})

navPackage.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }
})

navTestimonial.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }
})



menuToggle.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");

    if(visibilty === "true") {
        menuItem.setAttribute("data-visible", false);
    }

    console.log("clicked");
});

closeNav.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }
});
