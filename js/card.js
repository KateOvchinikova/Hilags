let cardButton = document.getElementsByClassName("card-thmb");
for (let i = 0; i < cardButton.length; i++) {
  cardButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let cardDescription = this.nextElementSibling;
    if (cardDescription.style.maxHeight) {
      cardDescription.style.maxHeight = null;
    } else {
      cardDescription.style.maxHeight = cardDescription.scrollHeight + "px";
    }
  });
}
