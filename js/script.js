var loginLink = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-close");

loginLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalLogin.classList.addClass("show");
  console.log("нажата кнопка входа");
});
