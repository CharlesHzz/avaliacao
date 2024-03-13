//--------Botões nota-------------

/*
const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const botao3 = document.querySelector('#botao3');
const botao4 = document.querySelector('#botao4');
const botao5 = document.querySelector('#botao4');
*/

let notaSelecionada = document.querySelector('.notaSelecionada');

const cardNota = document.querySelector('.cardNota');
const notaEnviada = document.querySelector('.notaEnviada');

let nota;

function saveNumber(numero){

    document.querySelectorAll('.notas button').forEach(function(btn) {
        btn.classList.remove('selected');
    });

    document.getElementById('botao' + numero).classList.add('selected');
    nota = numero;
}



//--------Botão enviar-------------
const btnEnviar = document.querySelector('#enviar');

btnEnviar.addEventListener('click', ()=>{

    if(typeof nota !== 'undefined'){
        cardNota.style.display = 'none';
        notaEnviada.style.display = 'flex'
        notaSelecionada.innerHTML = `Você selecionou ${nota} de 5`

    }else{
        alert('Por favor, Selecione uma nota')
    }
});
