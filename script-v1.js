"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// console.log(btnsShowModal);

// for (let i = 0; i < btnsShowModal.length; i++) {
//   console.log(btnsShowModal[i].textContent);
//   btnsShowModal[i].style.backgroundColor = "#000";
// }

// ALTERNATE TO FOR LOOP ABOVE: TURN NODE LIST INTO ARRRAY THEN MAP
Array.from(btnsShowModal).map((btn) =>
  btn.addEventListener("click", openModal)
);

// CLOSEMODAL FUNCTION ABOVE CREATED TO MAKE TWO LINES BELOW MUCH SHORTER. CAN ALSO BE USED IN THE ALTERNATE AT THE VERY BOTTOM
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// ALTERNATE TO SEPARATE EVENT LISTENERS ABOVE - "FOR EACH" LOOP ON ARRAY OF TWO ELEMENTS
// [btnCloseModal, overlay].forEach(function (element) {
//   element.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });
// });
