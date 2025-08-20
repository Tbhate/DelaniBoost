document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const openBtns = document.querySelectorAll(".openPopup"); // все кнопки
  const closeBtn = document.getElementById("closePopup");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => (popup.style.display = "flex"));
  });

  closeBtn.addEventListener("click", () => (popup.style.display = "none"));

  popup.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none"; // закрытие по фону
  });
});
