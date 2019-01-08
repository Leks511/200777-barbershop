var link = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = modalLogin.querySelector("form");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");
var isStorageSupport = "true";
var storage = "";


try {
  storage = localStorage.getItem("login");
} catch {
  isStorageSupport = "false";
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalLogin.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-show");
  modalLogin.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-error");
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

    if (modalLogin.classList.contains("modal-show")) {
      evt.preventDefault();
      modalLogin.classList.remove("modal-show");
      modalLogin.classList.remove("modal-error");
    }
  }
});

