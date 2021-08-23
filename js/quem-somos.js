$(document).ready(function () {
    $('.demo').slick({
        autoplay: true,
        autoplaySpeed: 3000,
    })
    $('#container_chamada').fadeOut();
    $('#container_chamada').fadeIn();
    $('#h3_sec1').hide();
    $('#p_sec1').hide();
    $('.h2s_sec2').hide();
    $('.ps_sec2').hide();
    var div = $(".sobrenos");
    var p = div.position();
    console.log(p)
    $(window).scroll(function () { // SCROLL
        var windowpos = $(window).scrollTop();
        if (windowpos >= (p.top - 350)) {
            $('#h3_sec1').slideDown(); // SLIDE
            $('#p_sec1').slideDown();
            $('.h2s_sec2').slideDown();
            $('.ps_sec2').slideDown();
        }
    });
    // ÍCONES PESSOAS HIDE
    $('.icons_redes1').hide();
    $('.icons_redes2').hide();
    $('.icons_redes3').hide();
    // ÍCONES PESSOAS FADEIN COM MOUSE EM CIMA
    $('#p1').mouseover(function () {
        $('#p1g').fadeIn(); // FADE
        $('#p1i').fadeIn();
        $('#p1l').fadeIn();
    });
    $('#p2').mouseover(function () {
        $('#p2g').fadeIn();
        $('#p2i').fadeIn();
        $('#p2l').fadeIn();
    });
    $('#p3').mouseover(function () {
        $('#p3g').fadeIn();
        $('#p3i').fadeIn();
        $('#p3l').fadeIn();
    });
    $('#p4').mouseover(function () {
        $('#p4g').fadeIn();
        $('#p4i').fadeIn();
        $('#p4l').fadeIn();
    });
    $('#p5').mouseover(function () {
        $('#p5g').fadeIn();
        $('#p5i').fadeIn();
        $('#p5l').fadeIn();
    });
    // FADE OUT COM MOUSE FORA
    $('.descricao_p').mouseover(function () {
        $('#p1g').fadeOut();
        $('#p1i').fadeOut();
        $('#p1l').fadeOut();
    });
    $('.descricao_p').mouseover(function () {
        $('#p2g').fadeOut();
        $('#p2i').fadeOut();
        $('#p2l').fadeOut();
    });
    $('.descricao_p').mouseover(function () {
        $('#p3g').fadeOut();
        $('#p3i').fadeOut();
        $('#p3l').fadeOut();
    });
    $('.descricao_p').mouseover(function () {
        $('#p4g').fadeOut();
        $('#p4i').fadeOut();
        $('#p4l').fadeOut();
    });
    $('.descricao_p').mouseover(function () {
        $('#p5g').fadeOut();
        $('#p5i').fadeOut();
        $('#p5l').fadeOut();
    });
});


function clockTick() {
    var currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (day + "/" + '0' + month + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
    // here we get the element with the id of "date" and change the content to the text variable we made above
    document.getElementById('date').innerHTML = text;
}
// here we run the clockTick function every 1000ms (1 second)
setInterval(clockTick, 1000);

new window.VLibras.Widget('https://vlibras.gov.br/app');

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
            $("main").css("margin-top", "70vh"); // ALTERAR A PARTIR DAS MEDIDAS DA SUA PÁGINA!
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