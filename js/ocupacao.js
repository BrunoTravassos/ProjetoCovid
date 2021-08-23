//Calculo main

 $(function () {
   $("#tabs").tabs();
 });
 $(function () {
   //chamando a função tooltip - abas
   $(document).tooltip();
 });

/* $(document).ready(function () {
  $('.demo').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: false,
    arrows: false,
  }); */

//função para leitura da 1º input após o blur
// alert("Meu deus");
$(document).ready(function () {
 
  var input = document.querySelector("#inp3");
  var qtdUti, qtdEnfermaria, media;

  $("#inp1").focus(function () {
    $(this).css("background-color", " #bfe1f3");
  });
  $("#inp1").blur(function () {
    qtdUti = $("#inp1").val();
  });
  //função para leitura da 2º input após o blur
  $("#inp2").focus(function () {
    $(this).css("background-color", " #bfe1f3");
  });
  $("#inp2").blur(function () {
    qtdEnfermaria = $("#inp2").val();
    // console.log(qtdEnfermaria);
    // //calculo da media entre a uti e a enfermaria
    media = (parseInt(qtdUti) + parseInt(qtdEnfermaria)) / 2;

    $("#inp3").val(media);
    input.disabled = true; // o input da 3º box é desabilitado
    //if's para pintura das box de serviços com uso do fadeTo em alguns casos
    if (media <= 59) {
      $("#cabecalho-tabs1").css("background-color", "#44cc00");
      $("#sec3").css("background-color", "#44cc00");
      $("#publicos").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#imobiliarias").css("background-color", "#44cc00");
      $("#concessionarias").css("background-color", "#44cc00");
      $("#escritorios").css("background-color", "#44cc00");
      $("#bares").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#comercio").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#shopping").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#beleza").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#academia").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#teatro").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#eventos").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#educacao_Transp").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      console.log("verde");
    }
    if (media >= 60 && media <= 69) {
      $("#cabecalho-tabs1").css("background-color", "#ffec1a");
      $("#sec3").css("background-color", "#ffec1a");
      $("#publicos").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#imobiliarias").css("background-color", "#44cc00");
      $("#concessionarias").css("background-color", "#44cc00");
      $("#escritorios").css("background-color", "#44cc00");
      $("#bares").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#comercio").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#shopping").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#beleza").css("background-color", "#ffec1a").fadeTo(750, 0.9);
      $("#academia").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#teatro").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#eventos").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#educacao_Transp").css("background-color", "#e44a4a").fadeTo(750, 0.7);
    }
    if (media >= 70 && media <= 79) {
      $("#cabecalho-tabs1").css("background-color", "#e69900");
      $("#sec3").css("background-color", "#e69900");
      $("#publicos").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#imobiliarias").css("background-color", "#e69900");
      $("#concessionarias").css("background-color", "#e69900");
      $("#escritorios").css("background-color", "#e69900");
      $("#bares").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#comercio").css("background-color", "#e69900");
      $("#shopping").css("background-color", "#e69900");
      $("#beleza").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#academia").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#teatro").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#eventos").css("background-color", "#e44a4a").fadeTo(750, 0.7);
      $("#educacao_Transp").css("background-color", "#e44a4a").fadeTo(750, 0.7);

      console.log("laranja");
    }
    if (media >= 80) {
      $("#cabecalho-tabs1").css("background-color", "#e44a4a");
      $("#sec3").css("background-color", "#e44a4a");
      $("#publicos").css("background-color", "#e44a4a");
      $("#imobiliarias").css("background-color", "#e44a4a");
      $("#concessionarias").css("background-color", "#e44a4a");
      $("#escritorios").css("background-color", "#e44a4a");
      $("#bares").css("background-color", "#e44a4a");
      $("#comercio").css("background-color", "#e44a4a");
      $("#shopping").css("background-color", "#e44a4a");
      $("#beleza").css("background-color", "#e44a4a");
      $("#academia").css("background-color", "#e44a4a");
      $("#teatro").css("background-color", "#e44a4a");
      $("#eventos").css("background-color", "#e44a4a");
      $("#educacao_Transp").css("background-color", "#e44a4a");
      console.log("vermelha");
    }
  });

  //navBar Hamburguer
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
});

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
