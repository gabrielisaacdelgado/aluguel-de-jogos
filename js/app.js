let jogosAlugados = 0;

function contarJogosAlugados() {
    console.log('Total de jogos alugados:' + jogosAlugados);
}



function alterarStatus (id) {
    let jogoClicado = document.getElementById('game-' + id);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;

        let confirmacao = confirm('Tem certeza que deseja devolver o jogo?');
        if (confirmacao) {
            alert('Devolução confirmada');
        } else {
            alert('Devolução cancelada');
        }
        
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
        jogosAlugados++;
    }

    contarJogosAlugados();

}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});