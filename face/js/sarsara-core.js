document.addEventListener("DOMContentLoaded", function () {
  const isMobileSarSara = window.innerWidth <= 968;
  const requiredFiles = [
    isMobileSarSara ? "sarsara-mob.ui.min.css" : "sarsara.ui.min.css",
  ];

  function checkAllResourcesLoaded() {
    const resources = performance.getEntriesByType("resource");
    const loadedFiles = resources
      .map((res) => res.name.split("/").pop())
      .filter((name) => requiredFiles.includes(name));

    return requiredFiles.every((file) => loadedFiles.includes(file));
  }

  if (document.getElementById("search-box")) {
    function fetchEngine() {
      try {
        const xhrobj = new XMLHttpRequest();
        xhrobj.open("GET", "search-engine.bc");
        xhrobj.send();

        xhrobj.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            const container = document.getElementById("search-box");
            container.innerHTML = xhrobj.responseText;

            if (document.querySelector(".landing-flight")) {
              const dep = document.querySelector(
                ".landing-flight .dep-name"
              ).innerText;
              const des = document.querySelector(
                ".landing-flight .des-name"
              ).innerText;

              const depId = document.querySelector(
                ".landing-flight .dep-id"
              ).innerText;

              const desId = document.querySelector(
                ".landing-flight .des-id"
              ).innerText;

              document.querySelector("#r-flight .departure.text-value ").value =
                dep;
              document.querySelector(
                "#r-flight .locationId.from"
              ).value = depId;

              document.querySelector(
                "#r-flight .destination.text-value"
              ).value = des;
              document.querySelector(
                "#r-flight .locationId.to"
              ).value = desId;
            }
            const scripts = container.getElementsByTagName("script");
            for (let i = 0; i < scripts.length; i++) {
              const scriptTag = document.createElement("script");
              if (scripts[i].src) {
                scriptTag.src = scripts[i].src;
                scriptTag.async = false;
              } else {
                scriptTag.text = scripts[i].textContent;
              }
              document.head
                .appendChild(scriptTag)
                .parentNode.removeChild(scriptTag);
            }
          }
        };
      } catch (error) {
        console.error("مشکلی پیش آمده است. لطفا صبور باشید", error);
      }
    }

    function waitForFiles() {
      if (checkAllResourcesLoaded()) {
        fetchEngine();
      } else {
        setTimeout(waitForFiles, 500);
      }
    }

    waitForFiles();
  }
});

function openParentdropDown(e) {
  let o = e.closest("li").querySelector(".dropdownmenu"),
    t = o.classList.contains("hidden");
  document.querySelectorAll(".toggleSubMenuBox").forEach((e) => {
    e.querySelector(".arrow-icon-menu").classList.remove("rotate-180");
  }),
    document.querySelectorAll(".dropdownmenu-parent").forEach((e) => {
      e.classList.add("hidden");
    }),
    document.querySelectorAll(".dropdownmenu").forEach((e) => {
      e.classList.add("hidden"),
        screen.width <= 1024 &&
          e
            .closest("li")
            .querySelector(".arrow-icon-menu")
            .classList.remove("rotate-180");
    }),
    t
      ? (o.classList.remove("hidden"),
        e.querySelector(".arrow-icon-menu").classList.add("rotate-180"))
      : (o.classList.add("hidden"),
        e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"));
}

function opendropDown(e) {
  let o = e.closest("li").querySelector(".dropdownmenu");
  o.classList.contains("hidden")
    ? (o
        .closest("li")
        .closest("ul")
        .querySelectorAll(".dropdownmenu")
        .forEach((e) => {
          e.classList.add("hidden"),
            screen.width <= 1024 &&
              e
                .closest("li")
                .querySelector(".arrow-icon-menu")
                .classList.remove("rotate-180");
        }),
      screen.width <= 1024 &&
        e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"),
      o.classList.remove("hidden"),
      screen.width <= 1024 &&
        (e.querySelector(".arrow-icon-menu").classList.remove("rotate-90"),
        e.querySelector(".arrow-icon-menu").classList.remove("max-lg:rotate-0"),
        e.querySelector(".arrow-icon-menu").classList.add("rotate-180")))
    : (o
        .closest("li")
        .closest("ul")
        .querySelectorAll(".dropdownmenu")
        .forEach((e) => {
          e.classList.add("hidden"),
            screen.width <= 1024 &&
              e
                .closest("li")
                .querySelector(".arrow-icon-menu")
                .classList.remove("rotate-180");
        }),
      screen.width <= 1024 &&
        e.querySelector(".arrow-icon-menu").classList.remove("rotate-180"));
}

function scrollToMenu() {
  const e = document.getElementById("menu-box").offsetTop;
  window.scrollTo({
    top: e,
    behavior: "smooth",
  });
}

function openHamburgerMenu(e) {
  document.getElementById("menu-box").classList.add("header-visible"),
    scrollToMenu();
}

function closeHamburgerMenu(e) {
  document.getElementById("menu-box").classList.remove("header-visible");
}

function loadContentHomaPage() {
  loadSearchEngine("search-engine.bc", "search-box");
}
async function loadSearchEngine(url, sectionload) {
  try {
    var xhrobj = new XMLHttpRequest();
    xhrobj.open("GET", url);
    xhrobj.send();

    xhrobj.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var container = document.getElementById(sectionload);
        container.innerHTML = xhrobj.responseText;
        if (document.querySelector(".landing-flight")) {
          const dep = document.querySelector(
            ".landing-flight .dep-name"
          ).innerText;
          const des = document.querySelector(
            ".landing-flight .des-name"
          ).innerText;

          const depId = document.querySelector(
            ".landing-flight .dep-id"
          ).innerText;

          const desId = document.querySelector(
            ".landing-flight .des-id"
          ).innerText;

          document.querySelector("#r-flight .departure-city .FCD1").value = dep;
          document.querySelector("#r-flight .departure-city .FCDid1").value =
            depId;

          document.querySelector("#r-flight .destination-city .FCD2").value =
            des;
          document.querySelector("#r-flight .destination-city .FCDid2").value =
            desId;
        }

        var scripts = container.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var scriptTag = document.createElement("script");
          if (scripts[i].src) {
            scriptTag.src = scripts[i].src;
            scriptTag.async = false;
          } else {
            scriptTag.text = scripts[i].textContent;
          }
          document.head
            .appendChild(scriptTag)
            .parentNode.removeChild(scriptTag);
        }
      }
    };
  } catch (error) {
    // console.error('مشکلی رخ داده است لطفا صبور باشید.', error);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const firstLi = document.querySelector(".question-items li");
  if (firstLi) {
    firstLi.classList.add("selected-item");
  }
  loadInitialQuestion();
});

function loadInitialQuestion() {
  var selectedElement = document.querySelector(
    ".question-items .selected-item"
  );
  if (selectedElement) {
    load_questions(selectedElement);
  }
}
function load_questions(e) {
  var t = e;
  document.querySelectorAll(".question-items li").forEach(function (item) {
    item.classList.remove("selected-item");
  });
  t.classList.add("selected-item");
  var a = t.getAttribute("data-id");
  t.closest(".question-show")
    .querySelector(".question-loading")
    .classList.remove("hidden");
  fetch("/load-question.bc?id=" + a)
    .then((response) => response.text())
    .then((data) => {
      t.closest(".question-show")
        .querySelector(".question-loading")
        .classList.add("hidden");
      var loadQuestionsElement = t
        .closest(".question-show")
        .querySelector(".load-question");
      loadQuestionsElement.innerHTML = data;
      var scripts = loadQuestionsElement.querySelectorAll("script");
      scripts.forEach(function (script) {
        eval(script.textContent);
      });
    })
    .catch((error) => console.error("Error loading question:", error));
}
document.querySelectorAll(".tour-price").forEach(function (element) {
  element.textContent = element.textContent.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1/"
  );
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

function showMore(element, id) {
  let containerlinks = document.getElementById(id);
  let more_less_btn_status = element.getAttribute("status");

  console.log(containerlinks, more_less_btn_status);

  if (more_less_btn_status == "more") {
    containerlinks.classList.remove("h-5");
    containerlinks.classList.remove("overflow-hidden");
    element.setAttribute("status", "less");
    element.innerText = "نمایش کمتر";
  } else {
    containerlinks.classList.add("h-5");
    containerlinks.classList.add("overflow-hidden");
    element.setAttribute("status", "more");
    element.innerText = "نمایش بیشتر";
  }
}

// if(document.querySelector(".swiper-airline")){

//    var swiper = new Swiper(".swiper-airline", {
//        slidesPerView: 'auto',
//        speed: 400,
//      centeredSlides: false,
//      spaceBetween: 30,
//      grabCursor: true,
//      autoplay: {
//        delay: 2500,
//        disableOnInteraction: false,
//      },
//      loop:true,
//    });

// }

if (document.querySelectorAll(".swiper-4").length > 0)
  swiper = new Swiper(".swiper-4", {
    slidesPerView: 4,
    speed: 600,
    centeredSlides: !1,
    spaceBetween: 16,
    grabCursor: !0,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 16 },
      768: { slidesPerView: 4, spaceBetween: 16 },
      1024: { slidesPerView: 4, spaceBetween: 16 },
    },
  });

if (document.querySelectorAll(".swiper-1").length > 0)
  swiper = new Swiper(".swiper-1", {
    slidesPerView: 1.3,
    speed: 600,
    centeredSlides: !1,
    spaceBetween: 8,
    grabCursor: !0,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    loop: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1.3, spaceBetween: 8 },
      768: { slidesPerView: 1.3, spaceBetween: 8 },
      1024: { slidesPerView: 1.3, spaceBetween: 8 },
    },
  });
