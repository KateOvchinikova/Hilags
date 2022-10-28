const showMore = document.querySelector(".show-more");
const cardLenght = document.querySelectorAll(".card-item-grid").length;
let items = 3;

showMore.addEventListener("click", () => {
  items += 3;
  const array = Array.from(document.querySelector(".card-list-grid").children);
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === cardLenght) {
    showMore.style.display = "none";
  }
});
