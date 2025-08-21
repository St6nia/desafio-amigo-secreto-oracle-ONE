//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona ao array
    amigos.push(nome);

    // Atualiza a lista exibida
    atualizarLista();

    // Limpa o campo de texto
    input.value = "";
    resultado.innerHTML = ``

}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa antes de renderizar de novo

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos primeiro.");
        return;
    }

    // Gera índice aleatório
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    // Exibe resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;

    // Limpa a lista de amigos na tela
    amigos = [];
    atualizarLista();
}
