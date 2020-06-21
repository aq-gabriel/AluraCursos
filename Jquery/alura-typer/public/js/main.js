var tempoInicial = $('#tempo-digitacao').text();
var campo = $('.campo-digitacao');

$(function () {
    atualizaTamanhoFrase();
    incializaContadores();
    inicializaCronometro();
    incializaMarcadores();
    $('#botao-reiniciar').click(reiniciaJogo);
    atualizaPlacar();
    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });

    $('.tooltip').tooltipster({
        trigger: 'custom'
    });
});

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $('#tempo-digitacao').text(tempo);
}

function atualizaTamanhoFrase() {
    var frase = $('.frase').text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $('#tamanho-Frase');
    tamanhoFrase.text(numPalavras);
}

function incializaContadores() {
    campo.on('input', function () {
        var conteudo = campo.val();

        var quantidadePalavras = conteudo.split(/\S+/).length - 1;
        $('#contador-palavras').text(quantidadePalavras);

        var qtdCaracteres = conteudo.length;
        $('#contador-caracteres').text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    campo.one('focus', function () {
        var tempoRestante = $('#tempo-digitacao').text();
        var cronometroID = setInterval(function () {
            tempoRestante--
            $('#tempo-digitacao').text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr('disabled', true);
    campo.toggleClass('campo-desativado');
    inserePlacar();
}

function incializaMarcadores() {
    campo.on('input', function () {
        var frase = $('.frase').text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass('borda-verde');
            campo.removeClass('borda-vermelha');
        } else {
            campo.addClass('borda-vermelha');
            campo.removeClass('borda-verde');
        }
    });
}

function reiniciaJogo() {
    campo.toggleClass('campo-desativado');
    campo.attr('disabled', false);
    campo.val('');
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial);
    inicializaCronometro();
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');
}


