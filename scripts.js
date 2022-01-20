var modalBtn = document.getElementById("nav-contact");
var modal = document.querySelector(".modal");

modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}
