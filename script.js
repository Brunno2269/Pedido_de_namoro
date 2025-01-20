// Seleciona os elementos do DOM
const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagem = document.getElementById('mensagem');

// Função para mover o botão "Não" para uma posição aleatória
function moverBotaoNao() {
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
}

// Função para disparar confetes de coração
function lancarConfetes() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['circle', 'heart'],
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'],
    });
}

// Evento para o botão "Sim"
botaoSim.addEventListener('click', () => {
    mensagem.textContent = 'Sabia que você ia dizer sim! ❤️';
    mensagem.style.color = '#4CAF50';
    lancarConfetes();
});

// Evento para o botão "Não" (clique e toque)
botaoNao.addEventListener('click', moverBotaoNao);
botaoNao.addEventListener('touchstart', moverBotaoNao);

// Evento para quando o mouse passa sobre o botão "Não"
botaoNao.addEventListener('mouseover', moverBotaoNao);