const phrases = [
    "Você é meu mundo inteiro.",
    "Te amo mais do que palavras podem dizer.",
    "Com você, tudo é melhor.",
    "Seu sorriso ilumina minha alma.",
    "Você é meu destino favorito.",
    "Sempre será a minha melhor escolha.",
    "Você quem deu sentido a minha vida.",
    "Nossos destinos foram traçados na maternidade.",
    "Quando vejo-te meu coração pula de alegria.",
    "Te ter é minha maior sorte.",
    "Amar nunca foi tão leve",
    "És tão bela quanto as pinturas de Da Vinci",
    "Só quero dizer Eu Te Amo Meu amor"
    ];
let currentPhraseIndex = 0;

function showNextPhrase() {
    if (currentPhraseIndex >= phrases.length) {
        currentPhraseIndex = 0; // reinicia do começo se acabar
    }

    const phrase = document.createElement("div");
    phrase.className = "phrase";
    phrase.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex++;

    const button = document.getElementById("loveButton");
    const buttonRect = button.getBoundingClientRect();

    let x, y;
    let tries = 0;
    do {
        x = Math.random() * (window.innerWidth - 250);
        y = Math.random() * (window.innerHeight - 100);
        tries++;
    } while (
        x + 250 > buttonRect.left - 20 &&
        x < buttonRect.right + 20 &&
        y + 50 > buttonRect.top - 20 &&
        y < buttonRect.bottom + 20 &&
        tries < 100
    );

    phrase.style.left = `${x}px`;
    phrase.style.top = `${y}px`;

    document.body.appendChild(phrase);

    setTimeout(() => {
        phrase.remove();
    }, 10000);
}

// Função que cria um coração na posição X aleatória embaixo da tela
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    // posição horizontal aleatória na largura da tela
    const x = Math.random() * window.innerWidth;

    heart.style.left = `${x}px`;
    heart.style.bottom = '0px';

    document.body.appendChild(heart);

    // Remove após animação acabar (2.5s)
    setTimeout(() => {
        heart.remove();
    }, 2500);
}

window.onload = () => {
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    const button = document.getElementById('loveButton');

    // Criar corações como fogos por 3 segundos
    let heartsInterval = setInterval(createHeart, 150);

    setTimeout(() => {
        clearInterval(heartsInterval);

        // Cortinas abrem
        leftCurtain.classList.add('open');
        rightCurtain.classList.add('open');

        // Após a animação das cortinas (4s), remover cortinas e mostrar botão
        setTimeout(() => {
        leftCurtain.style.display = 'none';
        rightCurtain.style.display = 'none';
        button.disabled = false;
        button.style.opacity = '1';
        }, 4000);

    }, 3000); // 3 segundos de fogos
};
