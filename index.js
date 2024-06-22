const cards = document.querySelectorAll(".card");
console.log(cards);

var isfillped = false;
var firstcard;
var secondcard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("card flipped");
  //   console.log(this);
  this.classList.add("flip");
  if (!isfillped) {
    isfillped = true;
    firstcard = this;
  } else {
    secondcard = this;
    // console.log(firstcard);
    // console.log(secondcard);

    checkit();
  }
}

function checkit() {
  //   console.log("checking...");
  if (firstcard.dataset.image === secondcard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("success");
  firstcard.removeEventListener("click", flip);
  secondcard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("fail");
  setTimeout(() => {
    firstcard.classList.remove("flip");
    secondcard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isfillped = false;
  firstcard = null;
  secondcard = null;
}
(function shufle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
