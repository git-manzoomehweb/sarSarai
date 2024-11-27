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

function loadContentHomaPage(){
   loadSearchEngine('search-engine.bc' , 'search-box');
}
async function loadSearchEngine(url, sectionload) {
   try {
       var xhrobj = new XMLHttpRequest();
       xhrobj.open('GET', url);
       xhrobj.send();

       xhrobj.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
               var container = document.getElementById(sectionload);
               container.innerHTML = xhrobj.responseText;

               var scripts = container.getElementsByTagName("script");
               for (var i = 0; i < scripts.length; i++) {
                   var scriptTag = document.createElement("script");
                   if (scripts[i].src) {
                       scriptTag.src = scripts[i].src;
                       scriptTag.async = false;
                   } else {
                       scriptTag.text = scripts[i].textContent;
                   }
                   document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
               }
           }
       };
   } catch (error) {
       // console.error('مشکلی رخ داده است لطفا صبور باشید.', error);
   }
}
document.addEventListener("DOMContentLoaded", function () {
   const firstLi = document.querySelector('.question-items li');
if (firstLi) {
  firstLi.classList.add('selected-item');
}
loadInitialQuestion();
});

function loadInitialQuestion() {
   var selectedElement = document.querySelector(".question-items .selected-item");
   if (selectedElement) {
      load_questions(selectedElement);
   }
}
function load_questions(e) {
   var t = e;
   document.querySelectorAll(".question-items li").forEach(function(item) {
       item.classList.remove("selected-item");
   });
   t.classList.add("selected-item");
   var a = t.getAttribute("data-id");
   t.closest(".question-show").querySelector(".question-loading").classList.remove("hidden");
   fetch("/load-question.bc?id=" + a)
       .then(response => response.text())
       .then(data => {
           t.closest(".question-show").querySelector(".question-loading").classList.add("hidden");
           var loadQuestionsElement = t.closest(".question-show").querySelector(".load-question");
           loadQuestionsElement.innerHTML = data;
           var scripts = loadQuestionsElement.querySelectorAll("script");
           scripts.forEach(function(script) {
               eval(script.textContent);
           });
       })
       .catch(error => console.error('Error loading question:', error));
}
document.querySelectorAll(".tour-price").forEach(function (element) {
   element.textContent = element.textContent.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1/");
});
const imagePopup = document.getElementById("image-popup");
if (imagePopup) {
    showPopup();
    function showPopup() {
        document.getElementById("bk-popup").style.display = "block";
        imagePopup.style.display = "block";
    }
    function closePopup() {
        document.getElementById("bk-popup").style.display = "none";
        imagePopup.style.display = "none";
        localStorage.setItem("popupClosed", "true");
    }
}


