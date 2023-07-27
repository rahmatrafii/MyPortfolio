const button = document.querySelector("#button");
const navMenu = document.querySelector("#nav-menu");
button.addEventListener("click", function () {
  button.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
window.addEventListener("click", function (e) {
  if (e.target != button && e.target != navMenu) {
    button.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    nav.classList.add("bg-nav");
  } else {
    header.classList.remove("navbar-fixed");
    nav.classList.remove("bg-nav");
  }
};

// google spreedshet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxT8RuwkhQtAXynwyNIC9FeS0sHIsM4EJPWdxfhlj_tbJvaj4BvFY9YPE3uIaGsmWO1bQ/exec";
const form = document.forms["submit-to-google-sheet"];
const close = document.querySelector("#close");
const alert = document.querySelector("#alert");
const btnKirim = document.querySelector("#btn-kirim");
const btnLoading = document.querySelector("#btn-loading");

close.addEventListener("click", () => {
  alert.classList.add("hidden");
  alert.classList.remove("flex");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika submit kirim
  // tampilkan tombol loading hilangkan tombol kirim
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim hilangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      alert.classList.remove("hidden");
      alert.classList.add("flex");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
