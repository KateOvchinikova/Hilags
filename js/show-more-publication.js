const showMore = document.querySelector(".show-more-pub");
const showMoreDiv = document.querySelector(".btn-center-pub");
const cardLenght = document.querySelectorAll(".masonry-items").length;
let items = 3;

showMore.addEventListener("click", () => {
  items += 12;
  const array = Array.from(
    document.querySelector(".masonry-containers").children
  );
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));
  showMoreDiv.classList.toggle("is-active");

  if (visItems.length === cardLenght) {
    showMore.style.display = "none";
  }
});
