const showMore = document.querySelector(".show-more");
const cardLenght = document.querySelectorAll(".masonry-item").length;
let items = 3;

showMore.addEventListener("click", () => {
  items += 3;
  const array = Array.from(
    document.querySelector(".masonry-container").children
  );
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));
  $(".publications").css("overflow", "scroll");
  $(".publications-gradient").css("display", "none");
  if (visItems.length === cardLenght) {
    showMore.style.display = "none";
  }
});
