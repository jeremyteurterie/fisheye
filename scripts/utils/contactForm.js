// DOM Elements
const form = document.getElementById("form");
const modal = document.getElementById("contact_modal");
const modalButton = document.getElementsByClassName("modalbutton");
const modalClose = document.getElementById("closeModal");
const btnSubmit = document.querySelector(".btn-submit");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");
const regexName = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

/*const addGlobalEventListener = (type, selector, callback, options) => {
  document.addEventListener(
    type,
    (event) => {
      if (event.target.matches(selector)) callback(event);
    },
    options
  );
};

addGlobalEventListener("click", "#displayModal", (event) => {
  console.log("Clicked Button");
  displayModal(event);
});$

// Launch modal event
Array.from(modalButton).forEach((btn) =>
  btn.addEventListener("click", displayModal)
);
console.log(modalButton);

// Close modal event
modalClose.addEventListener("click", closeModal);*/

// Fontions pour vérifier si les champs sont correctes
function checkFirst() {
  console.log(first.value);
  if (
    !first.value == null ||
    first.value.trim().match(regexName) ||
    !first.value.length < 2
  ) {
    return true;
  } else {
    first.style.borderColor = "red";
    first.style.borderWidth = "50px";
    return false;
  }
}

function checkLast() {
  console.log(last.value);
  if (
    !last.value == null ||
    last.value.trim().match(regexName) ||
    !last.value.length < 2
  ) {
    return true;
  } else {
    last.style.backgroundColor = "red";
    return false;
  }
}

function checkEmail() {
  console.log(email.value);
  if (email.value.trim().match(regexEmail)) {
    return true;
  } else {
    email.style.backgroundColor = "red";
    return false;
  }
}

function checkTextArea() {
  console.log(textArea.value);
  if (!textArea.value == null) {
    return true;
  } else {
    textArea.style.backgroundColor = "red";
    return false;
  }
}
