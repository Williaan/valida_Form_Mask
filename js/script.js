'use strict'

const msg = document.querySelectorAll('.caixa-erro');
const cpf = document.getElementById('cpf');
const telefone = document.getElementById('tel');
const cnpj = document.getElementById('cnpj');
const data = document.getElementById('nasc');
const cep = document.getElementById('cep');
const validar = document.getElementById('validar');
const resetar = document.getElementById('resetar');
const form = document.getElementById('form');

form.addEventListener('keypress', (eventClick) =>{ // Bloquear caracteres texto ou especiais
	if(!characters(eventClick)){
		eventClick.preventDefault();

	}
})	

function characters(eventChars){ // Criando uma regex
	const chars = String.fromCharCode(eventChars.keyCode)
	const regex = '[0-9, \b,\r]';
	if(chars.match(regex)){
		return true
	}
}

validar.addEventListener('click', () =>{ // verifica os campos vazios
	for(let cont = 0; msg.length > cont; cont++){
		if(cpf.value == 0){
			msg[0].style.display = 'block';
			cpf.style.border = '1px solid red';
			cpf.addEventListener('keydown', () =>{
				msg[0].style.display = 'none';
				cpf.style.border = '1px solid #00BFFF';
				
			});		
			
		}else if(telefone.value == 0){
			msg[1].style.display = 'block';
			telefone.style.border = '1px solid red';
			telefone.addEventListener('keydown', function(){
				msg[1].style.display = 'none';
				telefone.style.border = '1px solid #00BFFF';
			})

		}else if(cnpj.value == 0){
			msg[2].style.display = 'block';
			cnpj.style.border = '1px solid red';
			cnpj.addEventListener('keydown', () =>{
				msg[2].style.display = 'none';
				cnpj.style.border = '1px solid #00BFFF';
			})
		
		}else if(data.value == 0){
			msg[3].style.display = 'block';
			data.style.border = '1px solid red';
			data.addEventListener('keydown', function(){
				msg[3].style.display = 'none';
				data.style.border = '1px solid #00BFFF';
			})

		}else if(cep.value == 0){
			msg[4].style.display = 'block';
			cep.style.border = '1px solid red';
			cep.addEventListener('keydown', () =>{
				msg[4].style.display = 'none';
				cep.style.border = '1px solid #00BFFF';
			})
		}
	}		
});

resetar.addEventListener('click', () =>{ // Resetar bordas dos inputs
	let allInputs = [cpf, cep, cnpj, telefone, data];

	for(let i = 0; allInputs.length > i; i++){
		allInputs[0].style.border = '1px solid #ccc';
		allInputs[1].style.border = '1px solid #ccc';
		allInputs[2].style.border = '1px solid #ccc';
		allInputs[3].style.border = '1px solid #ccc';
		allInputs[4].style.border = '1px solid #ccc';

	}
	
})

cpf.addEventListener('keydown', function () { // Função para CPF.
	let pessoa = cpf.value;

	if (pessoa.length == 3) {
		cpf.value += ".";

	}else if (pessoa.length == 7) {
		cpf.value += ".";

	}else if (pessoa.length == 11) {
		cpf.value += "-";

	}

});

cnpj.addEventListener('keydown', () => { // Função para CNPJ.
	let juridico = cnpj.value;

	if (juridico.length == 2) {
		cnpj.value += ".";

	}else if (juridico.length == 6) {
		cnpj.value += ".";


	}else if (juridico.length == 10) {
		cnpj.value += "/";

	}else if (juridico.length == 15) {
		cnpj.value += "-";

	}
});

telefone.addEventListener('keydown', function(){ // Função para TELEFONE.
	let fone = telefone.value;

	if (fone.length == 0) {
		telefone.value = "(";

	}else if (fone.length == 3) {
		telefone.value += ")";

	}else if (fone.length == 5) {
		telefone.value += " ";

	}else if (fone.length == 10) {
		telefone.value += "-";

	}
});

data.addEventListener('keydown', () => { // Função para NASCIMENTO.
	let nasc = data.value;

	if (nasc.length == 2) {
		data.value += "/";

	}else if (nasc.length == 5) {
		data.value += "/";

	}
});

cep.addEventListener('keydown', function(){ // Função para CEP.
	let local = cep.value;

	if (local.length == 5) {
		cep.value += "-";

	}

});