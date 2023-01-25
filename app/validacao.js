function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute; //conver o numero em inteiro.

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>valor invalido</div>`;
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div> valor invalido: o numero secreto
    precisa estar entre ${maiorValor} e ${menorValor}</div>`;
  }
  if (numero === numeroSecreto) {
    //cria uma nova tela de html
    document.body.innerHTML = `<h2>Você acertou!</h2>
    <h3>O numero secreto era o ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Reiniciar o jogo</button>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>`;
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})
