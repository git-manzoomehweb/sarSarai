function openParentdropDown(e) {
    let o = e.closest("li").querySelector(".dropdownmenu"),
       t = o.classList.contains("hidden");
    document.querySelectorAll(".toggleSubMenuBox").forEach(e => {
       e.querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), document.querySelectorAll(".dropdownmenu-parent").forEach(e => {
       e.classList.add("hidden")
    }), document.querySelectorAll(".dropdownmenu").forEach(e => {
       e.classList.add("hidden"), screen.width <= 1024 && e.closest("li").querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), t ? (o.classList.remove("hidden"), e.querySelector(".arrow-icon-menu").classList.add("rotate-180")) : (o.classList.add("hidden"), e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"))
 }
 
 function opendropDown(e) {
    let o = e.closest("li").querySelector(".dropdownmenu");
    o.classList.contains("hidden") ? (o.closest("li").closest("ul").querySelectorAll(".dropdownmenu").forEach(e => {
       e.classList.add("hidden"), screen.width <= 1024 && e.closest("li").querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), screen.width <= 1024 && e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"), o.classList.remove("hidden"), screen.width <= 1024 && (e.querySelector(".arrow-icon-menu").classList.remove("rotate-90"), e.querySelector(".arrow-icon-menu").classList.remove("max-lg:rotate-0"), e.querySelector(".arrow-icon-menu").classList.add("rotate-180"))) : (o.closest("li").closest("ul").querySelectorAll(".dropdownmenu").forEach(e => {
       e.classList.add("hidden"), screen.width <= 1024 && e.closest("li").querySelector(".arrow-icon-menu").classList.remove("rotate-180")
    }), screen.width <= 1024 && e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"))
 }
 
 function scrollToMenu() {
    const e = document.getElementById("menu-box").offsetTop;
    window.scrollTo({
       top: e,
       behavior: "smooth"
    })
 }
 
 function openHamburgerMenu(e) {
    document.getElementById("menu-box").classList.add("header-visible"), scrollToMenu()
 }
 
 function closeHamburgerMenu(e) {
    document.getElementById("menu-box").classList.remove("header-visible")
 }
//  $(document).ready(function (e) {
//     $(window).width() <= 1024 ? ($(".loginRegister").load("/M_Login_Register.bc"), $(".col3-second-part-header").load("/M_Login_Information.bc")) : ($(".Login_Information").load("/Client_Login_Information_ver.2.bc"), $(".Login_Information").css("cursor", "inherit"))
//  }),
$(document).ready(function () {
   $("#search-box").load("./search-engine");
});

document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll(".question-item").forEach(function (item) {
      item.classList.remove("active-question");
      const questionQu = item.querySelector(".question-qu");
      if (questionQu) {
         questionQu.addEventListener("click", function () {
            item.classList.toggle("active-question");
         });
      }
   });
});

   
// function load_questions(e){
//    $(".question-items li").removeClass("selected-item");
//    $(e).addClass("selected-item");
//    var t = $(e).attr("data-item"); 
//    $(".qu-contents." + t).addClass("active-content")
// }
function load_questions(e) {
   document.querySelectorAll(".question-items li").forEach(function (item) {
      item.classList.remove("selected-item");
   });
   e.classList.add("selected-item");
   const t = e.getAttribute("data-item");
   document.querySelectorAll(".qu-contents").forEach(function (content) {
      content.classList.remove("active-content");
   });
   const targetContent = document.querySelector(".qu-contents." + t);
   if (targetContent) {
      targetContent.classList.add("active-content");
   }
}


