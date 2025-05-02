let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
const maxTentativas = 10;
const input = document.getElementById("jogador");
const button = document.getElementById("botaoJogador");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

button.addEventListener('click', () => {
    const palpite = parseInt(input.value);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            mensagem.textContent = "Por favor, digite um numero entre 1 e 100";
            return;
        }

        if (tentativasRestantes <= 0) return;
        tentativasRestantes --;

        if (palpite === numeroSecreto) {
            mensagem.textContent = `🥳🥳🥳 Você acertou! O número era ${numeroSecreto} 🥳🥳🥳`;

            button.disabled = true;
            input.disabled = true;
        }

        else if (palpite < numeroSecreto) {
            mensagem.textContent = "O número secreto é maior";
        }
        else {
            mensagem.textContent = "O número secreto é menor";
        }

        tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

        if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
            mensagem.textContent = `😫😫😫 Você perdeu! O número secreto era ${numeroSecreto} 😫😫😫`;
            button.disabled = true;
            input.disabled = true;
        }

        input.value = "";
})