import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://realtime-database-for-wishlist-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");
const inputFieldEl = document.getElementById("input-field");
const addBtnEl = document.getElementById("add-button");
const wishList = document.getElementById("wish-list");

addBtnEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  
  clearInputFieldEl();
  showWishListItem(inputValue);
});

function clearInputFieldEl() {
  inputFieldEl.value = "";
}
function showWishListItem(itemValue) {
  wishList.innerHTML += `<li>${itemValue}</li>`;
}
