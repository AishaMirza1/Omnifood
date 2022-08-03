"use strict";

const headerEl = document.querySelector(".header");

const openNaveEl = document.querySelector(".mobile-nav-icon");
const closeNaveEl = document.querySelector(".nav-close");

openNaveEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
closeNaveEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
