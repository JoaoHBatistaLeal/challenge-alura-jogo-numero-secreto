let numeroMax = 50
let listaDeNumerosSorteados = []

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let mensagemh1 = `Jogo do número secreto`
let mensagemp = `Escolha um número entre 1 e ${numeroMax}`

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', mensagemh1);
    exibirTextoNaTela('p', mensagemp);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o numero secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('h1', `O número secreto é menor que ${chute} `);
            exibirTextoNaTela ('p', '' );
        } else{
            exibirTextoNaTela ('h1', `O número secreto é maior que ${chute}`);
            exibirTextoNaTela ('p', '' );
        }
        tentativas++
        limparCampo()
    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroMax + 1);
    let quantidadeDeElementosNaLista= listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMax) {
        listaDeNumerosSorteados= []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido
    }
        
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    tentativas=1;
    numeroSecreto = gerarNumeroAleatorio();
    console.log (`${numeroSecreto}`)
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute ('disabled', 'disabled');
}

