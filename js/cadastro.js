$(function () {
    $("#accordion").accordion();
});
$(document).ready(function () {
    $('#gravidezdiv').hide();
});

var progresso = 0;

$('#SUS').blur(function () {
    var sus = $('#sus').val();
    if (sus == '') {
        $('#sus').css('borderColor', 'red');
    } else {
        progresso += 80.97916666666667;
        $('#sus').css('borderColor', 'green');
    }
});

$('#profissao').blur(function () {
    var profissao = $('#profissao').val();
    if (profissao == '' || profissao == 0) {
        $('#profissao').css('borderColor', 'red');
    } else {
        progresso += 80.97916666666667;
        $('#profissao').css('borderColor', 'green');
    }
});

$('#peso').blur(function () {
    var peso = $('#peso').val();
    if (peso == '') {
        $('#peso').css('borderColor', 'red');
    } else {
        progresso += 80.97916666666667;
        $('#peso').css('borderColor', 'green');
    }
});

$('#altura').blur(function () {
    var altura = $('#altura').val();
    if (altura == '') {
        $('#altura').css('borderColor', 'red');
    } else {
        progresso += 80.97916666666667;
        $('#altura').css('borderColor', 'green');
    }
});

$('#etnia').blur(function () {
    var etnia = $('#etnia').val();
    if (etnia == '') {
        $('#etnia').css('borderColor', 'red');
    } else {
        progresso += 80.97916666666667;
        $('#etnia').css('borderColor', 'green');
    }
});

$('#vacinas').blur(function () {
    var vacinas = $('#vacinas').val();
    if (vacinas == '') {
        $('#vacinas').css('borderColor', 'red');
    } else {
        progresso += 80.97916666666667;
        $('#vacinas').css('borderColor', 'green');
    }
});

$('#btnenviar').click(function (e) {
    e.preventDefault();
    var peso = $('#peso').val();
    var altura = $('#altura').val();
    var imc = peso / (altura ** 2);
    var mensagem = 0;
    if (imc < 18.5) {
        mensagem = 'Abaixo do Peso!'
    } else if (imc < 24.9) {
        mensagem = 'Peso Normal!'
    } else if (imc < 29.9) {
        mensagem = 'Sobrepeso!'
    } else if (imc < 34.9) {
        mensagem = 'Obesidade Grau I!'
    } else if (imc < 39.9) {
        mensagem = 'Obesidade Grau II!'
    } else if (imc >= 40) {
        mensagem = 'Obesidade Grau III ou Mórbida!'
    }

    document.getElementById('resultado').innerHTML = `Sua altura é ${altura}. <br> Seu peso é ${peso}. <br> O equivalente ao seu IMC é ${imc.toFixed(2)}. Indicando: ${mensagem}. <br>${possui_comorbidade} Sua idade é ${idade_global} e ${mensagem_global}`;
});

$('#sex').blur(function () {
    var sex = $('#sex').val();
    if (sex == 'default') {
        $('#gravidezdiv').hide();
        $('#sex').css('borderColor', 'red');
    } else if (sex == 'masculino' || sex == 'naoinfo') {
        progresso += 80.97916666666667;
        $('#sex').css('borderColor', 'green');
        $('#gravidezdiv').hide();
    } else if (sex == 'feminino') {
        progresso += 80.97916666666667;
        $('#gravidezdiv').fadeIn();
        $('#sex').css('borderColor', 'green');
    }
});

var possui_comorbidade = 0;
$("#comorbidade").blur(function () {
    var comorbidade = $('#comorbidade').val();
    if (comorbidade > 0) {
        possui_comorbidade = 'Consta comorbidade.'
        progresso += 80.97916666666667;
    } else {
        possui_comorbidade = 'Não consta comorbidade.'
        progresso += 80.97916666666667;
    }
});

$("#nome").blur(function () {
    var nome = $('#nome').val();
    if (nome == '') {
        $('#nome').css('borderColor', 'red');
    } else {
        $('#nome').css('borderColor', 'green');
        progresso += 80.97916666666667;
    }
});

$("#cpf").blur(function () {
    var cpf = $('#cpf').val();
    var cpf_regex = new RegExp(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/);
    var checagem = cpf_regex.test(cpf)
    if (!checagem) {
        $('#cpf').css('borderColor', 'red');
    } else {
        $('#cpf').css('borderColor', 'green');
        progresso += 80.97916666666667;
    }
});

var idade_global = 0;
var mensagem_global = 0;
$("#idade").blur(function () {
    var idade = $('#idade').val();
    var data_completa = new Date(idade)
    var ano = data_completa.getFullYear()
    var checagem = 2021 - ano;
    if (checagem > 18) {
        idade_global = checagem;
        mensagem_global = 'você pode se vacinar!'
    } else {
        idade_global = checagem;
        mensagem_global = 'você não pode se vacinar!'
    }
    if (checagem > 130 || checagem < 0) {
        $('#idade').css('borderColor', 'red');
    } else {
        $('#idade').css('borderColor', 'green');
        progresso += 80.97916666666667;
    }
});

var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

$("#email").blur(function () {
    var email = $('#email').val();
    var email_regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var checagem = email_regex.test(email)
    if (!checagem) {
        $('#email').css('borderColor', 'red');
    } else {
        $('#email').css('borderColor', 'green');
        progresso += 80.97916666666667;
    }
});

var intervalId = window.setInterval(function () {
    $('#green').css('width', progresso);
}, 100);

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