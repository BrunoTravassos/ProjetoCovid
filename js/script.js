//Função aumenta e diminui fonte
function aumenta_fonte() {
  var elemento = document.getElementById("principal");
  var tamanho_fonte = getComputedStyle(elemento).fontSize;
  tamanho_atual = parseFloat(tamanho_fonte);
  elemento.style.fontSize = (tamanho_atual + 1) + 'px';
}
//O método getComputedStyle () obtém todas as propriedades e valores CSS reais (calculados) do elemento especificado.O estilo calculado é o estilo realmente usado na exibição do elemento, após a aplicação de "estilos" de fontes múltiplas.

function diminui_fonte() {
  var elemento = document.getElementById("principal");
  var tamanho_fonte = getComputedStyle(elemento).fontSize;
  tamanho_atual = parseFloat(tamanho_fonte);
  elemento.style.fontSize = (tamanho_atual - 1) + 'px';
}
//função horario e dia atual!
function horario() {
  var horarioAtual = new Date(),
    month = horarioAtual.getMonth() + 1,
    day = horarioAtual.getDate(),
    year = horarioAtual.getFullYear(),
    hours = horarioAtual.getHours(),
    minutes = horarioAtual.getMinutes(),
    seconds = horarioAtual.getSeconds(),
    text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
  document.getElementById("date").innerHTML = text;
}
setInterval(horario, 1000);
//O método setInterval () chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//funções Jquery:


//Função Caixa de Dialogo, com informativo
$(document).ready(function () {
  $(function () {
    $("#dialog").dialog();
  });
  //Função Tabs - Possui uma folha de estilo elegante e versatil com noticias
  $(function () {
    $("#tabs").tabs();
  });

  $(".saibamais").ready(function () {
    $("#p_item1 , #p_item2 , #p_item3").hide();
  })
  $(".saibamais").dblclick(function () {
    $("#p_item1, #p_item2, #p_item3").slideDown(1000);
  })
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
      console.log(counter)
      if (counter % 2 === 0) {
        $("main").css("margin-top", "1vh");
      } else {
        $("main").css("margin-top", "40vh"); // ALTERAR A PARTIR DAS MEDIDAS DA SUA PÁGINA!
      }
      // this.lista.classList.toggle(this.activeClass);
      this.lista.classList.toggle(this.ativar);
      this.animaLinks();
      // console.log("this");
    }

    addClickEvent() {
      // this.menu.addEventListener("click", this.clicarMenu);
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
    ".lista_nav li",
  );
  navBarResponsivel.init();
  document.body.onresize = function () {
    if (document.body.clientWidth > 800) {
      $("main").css("margin-top", "0vh");
    }
  };

})