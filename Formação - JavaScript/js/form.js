var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona')
    var paciente = obtemPacienteDoForumulario(form);

    var erros = validaPaciente(paciente);
  
    if(erros.length > 0){       
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPaciente(paciente);   

    form.reset();
    var ul = document.querySelector('#mensagens-erro');
    limpaComponente(ul);

});

function adicionaPacienteNaTabela(paciente) {
    
    var pacienteTr = montaTr(paciente); 
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {

    var ul = document.querySelector('#mensagens-erro');
    limpaComponente(ul);

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });

}

/* Bloco de funções */
function obtemPacienteDoForumulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,   
        imc: calculaImc(form.peso.value, form.altura.value)
    }
 
    return paciente;
}

function montaTr(paciente) {    
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr
}

function montaTd(dado,classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
   
    var erros = [];   

    if (!validaPeso(paciente.peso)) {

        erros.push('O peso é invalido!');
    }

    if (!validaAltura(paciente.altura)) {

        erros.push('Altura é invalida!');
    }

    /* Valida tamanho dos campos do form. */
    if(paciente.nome.length == 0){
        erros.push('O nome não pode ser em branco');
    }

    if(paciente.peso.length == 0){
        erros.push('O peso não pode ser em branco');
    }

    if(paciente.altura.length == 0){
        erros.push('A altura não pode ser em branco');
    }

    if(paciente.gordura.length == 0){
        erros.push('A gordura não pode ser em branco');
    }





    return erros;

}

function limpaComponente(componente) {
    componente.innerHTML = '';
}