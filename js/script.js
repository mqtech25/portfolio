// About Tab
const aboutSection = document.querySelector(".about-section"),
  aboutTabs = document.querySelector(".about-tabs"),
  aboutBtn = document.getElementById("aboutBtn"),
  portfolioBtn = document.getElementById("portfolioBtn"),
  homeSection = document.querySelector(".home-section"),
  portfolioSection = document.querySelector(".portfolio-section"),
  contactSection = document.querySelector(".contact-section"),
  contactBtn = document.getElementById("contactBtn"),
  navBtn = document.querySelector(".nav-toggle"),
  menuNav = document.querySelector(".menu-nav");

  
// aboutBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   aboutSection.classList.remove("hidden");
//   homeSection.classList.add("hidden");
// });

// portfolioBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   portfolioSection.classList.remove("hidden");
//   homeSection.classList.add("hidden");
// });

// contactBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   contactSection.classList.remove("hidden");
//   aboutSection.classList.add("hidden");
// });
// Load page
window.onload=(e)=>{
  var hash = window.location.hash;
  if(hash!=""){
    hash=hash.substring(0,hash.length);
    homeSection.classList.add("hidden");
    homeSection.classList.remove("active");
    document.querySelector(hash).classList.remove("hidden");
    document.querySelector(hash).classList.add("active");
  }
}
// Active Section
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("link-item") && e.target.hash != "") {
      if(e.target.classList.contains("nav-link")){
        toggleMenu(navBtn);
      }
      setTimeout(()=>{
        var activeSection=document.querySelector("section.active");
        activeSection.classList.remove('active');
        activeSection.classList.add('hidden');
        document.querySelector(e.target.hash).classList.add("active");
        document.querySelector(e.target.hash).classList.remove("hidden");
        window.scrollTo(0,0);
        document.body.classList.remove("hide-scolling");

      },200)
  }
});
navBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu(navBtn);
});
// toggleMenu func
function toggleMenu(navToggle) {
  navToggle.classList.toggle("open");
  setTimeout(() => {
    menuNav.classList.toggle("hidden");
  }, 60);
}

// about tabs
aboutTabs.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    aboutTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// popup hiden when click on outside popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});
// Portfolio item Detail Popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetail(e.target.parentElement);
  }
});

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hidden-scroll");
  document.querySelector(".main").classList.toggle("fadeUp");
}
function portfolioItemDetail(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-thumbnail img"
  ).src;
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item h3").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-detail"
  ).innerHTML;
}

  /* ---- particles.js config ---- */

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


// Testing Code
// function showProfilePopup(e) {
//   const title = e.getAttribute("data-title");
//   const image = e.getAttribute("data-imagepath");
//   const description = e.getAttribute("data-description");
//   const technologies = e.getAttribute("data-technologies");
//   const popupElement = document.querySelector(".portfolio-popup");
//   popupElement.classList.add("open");
//   const bodyBlur = document.querySelector(".main");
//   bodyBlur.classList.add("fadeUp");
//   const overflowScroll = document.querySelector("body");
//   overflowScroll.classList.add("hidden-scroll");
//   popupElement.querySelector("#portfolio_popup_thumbnail").src = image;
//   popupElement.querySelector("#portfolio_popup_title").innerHTML = title;
//   popupElement.querySelector("#portfolio_popup_description").innerHTML =
//     description;
// }
// function closePortfolioPopup(e) {
//   const popupElement = document.querySelector(".portfolio-popup");
//   popupElement.classList.remove("open");
//   const bodyBlur = document.querySelector(".main");
//   bodyBlur.classList.remove("fadeUp");
//   const overflowScroll = document.querySelector("body");
//   overflowScroll.classList.remove("hidden-scroll");
// }
// // popup hiden when click on outside popup
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("pp-inner")) {
//     closePortfolioPopup();
//   }
// });
