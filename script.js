var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");
var cancelPopup = document.getElementById("cancel-popup");

addPopupButton.addEventListener("click", function () {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

cancelPopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addBook.addEventListener("click", function (event) {
  event.preventDefault();

  // Create a new book card
  var div = document.createElement("div");
  div.classList.add("book-container");
  div.innerHTML = `
    <h2>${bookTitleInput.value}</h2>
    <h5>${bookAuthorInput.value}</h5>
    <p>${bookDescriptionInput.value}</p>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  div.querySelector(".delete-btn").addEventListener("click", function () {
    div.remove();
  });

  // Append the book card to the container
  container.appendChild(div);

  // Close the popup and clear form
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookDescriptionInput.value = "";
});

