var counter = 0;
class NavBarResponsivel {
  constructor(menu, lista, links) {
    this.menu = document.querySelector(menu);
    this.lista = document.querySelector(lista);
    this.links = document.querySelectorAll(links);
    this.ativar = "active";

    this.clicarMenu = this.clicarMenu.bind(this);
  }

  animaLinks() {
    this.links.forEach((link) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s");
    });
  }

  clicarMenu() {
    counter++;
    if (counter % 2 === 0) {
      $("main").css("margin-top", "0vh");
    } else {
      $("main").css("margin-top", "32vh");
    }
    this.lista.classList.toggle(this.ativar);

    this.animaLinks();
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.clicarMenu);
  }
  init() {
    if (this.menu) {
      this.addClickEvent();
    }
    return this;
  }
}

const navBarResponsivel = new NavBarResponsivel(
  ".menu-hamburguer",
  ".lista_nav",
  ".lista_nav li"
);
navBarResponsivel.init();

document.body.onresize = function () {
  if (document.body.clientWidth > 800) {
    $("main").css("margin-top", "0vh");
  }
};

function clockTick() {
  var currentTime = new Date(),
    month = currentTime.getMonth() + 1,
    day = currentTime.getDate(),
    year = currentTime.getFullYear(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds(),
    text =
      day +
      "/" +
      "0" +
      month +
      "/" +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
  // here we get the element with the id of "date" and change the content to the text variable we made above
  document.getElementById("date").innerHTML = text;
}
// here we run the clockTick function every 1000ms (1 second)
setInterval(clockTick, 1000);
