// Espera o HTML ser totalmente carregado para rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os elementos principais do HTML
    const inputMeta = document.getElementById('nova-meta-input');
    const botaoAdicionar = document.getElementById('adicionar-meta-btn');
    const listaDeMetas = document.getElementById('lista-metas');

    // 2. Função principal para adicionar uma nova meta
    function adicionarMeta() {
        // Pega o texto do input e remove espaços em branco
        const textoDaMeta = inputMeta.value.trim();

        // Se o texto não estiver vazio, cria a meta
        if (textoDaMeta !== '') {
            // Cria os novos elementos HTML
            const novoItemLista = document.createElement('li');
            const textoSpan = document.createElement('span');
            const botaoDeletar = document.createElement('button');

            // Configura o texto da meta
            textoSpan.textContent = textoDaMeta;

            // Configura o botão de deletar
            botaoDeletar.textContent = 'X';
            botaoDeletar.className = 'delete-btn';

            // --- Adiciona os 'escutadores de eventos' (cliques) ---

            // 1. Clique no texto para CONCLUIR
            textoSpan.addEventListener('click', () => {
                // Adiciona ou remove a classe 'concluida'
                novoItemLista.classList.toggle('concluida'); 
            });

            // 2. Clique no 'X' para DELETAR
            botaoDeletar.addEventListener('click', () => {
                // Remove o item (li) da lista (ul)
                listaDeMetas.removeChild(novoItemLista);
            });

            // --- Monta a meta ---
            novoItemLista.appendChild(textoSpan);     // Adiciona o texto ao 'li'
            novoItemLista.appendChild(botaoDeletar);  // Adiciona o botão 'X' ao 'li'
            listaDeMetas.appendChild(novoItemLista);  // Adiciona o 'li' à lista 'ul'

            // Limpa o campo de input para a próxima meta
            inputMeta.value = '';
            // Coloca o foco de volta no input
            inputMeta.focus();
        }
    }

    // 3. Vincula a função 'adicionarMeta' a dois eventos:
    
    // Evento 1: Clique no botão "Adicionar"
    botaoAdicionar.addEventListener('click', adicionarMeta);

    // Evento 2: Pressionar a tecla "Enter" no campo de input
    inputMeta.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarMeta();
        }
    });

});
