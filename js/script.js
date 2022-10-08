// About Tab
const aboutSection = document.querySelector(".about-section"),
  aboutTabs = document.querySelector(".about-tabs"),
  aboutBtn = document.getElementById("aboutBtn"),
  portfolioBtn = document.getElementById("portfolioBtn"),
  homeSection = document.querySelector(".home-section"),
  portfolioSection = document.querySelector(".portfolio-section"),
  contactSection = document.querySelector(".contact-section"),
  contactBtn = document.getElementById("contactBtn");

aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  aboutSection.classList.remove("hidden");
  homeSection.classList.add("hidden");
});

portfolioBtn.addEventListener("click", function (e) {
  e.preventDefault();
  portfolioSection.classList.remove("hidden");
  homeSection.classList.add("hidden");
});

contactBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contactSection.classList.remove("hidden");
  aboutSection.classList.add("hidden");
});
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
