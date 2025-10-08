function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    const campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Declare o nome da personagem no campo de pesquisa </p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Verifica se 'dado existe e é um array
    if (!dado | !Array.isArray(dado)) {
        console.error('O array "dado" não está definido ou não é um array');
        return;
    }

    // Itera sobre cada dado e verifica se contém o termo pesquisado
    dado.forEach(dado => {
        const titulo = String(dado.titulo).toLowerCase();
        const profissao = String(dado.profissao).toLowerCase();
        const introducao = String(dado.introducao).toLowerCase();
        const desenvolvimento = String(dado.desenvolvimento).toLowerCase();
        const resumo = String(dado.resumo).toLowerCase();

        if (titulo.includes(campoPesquisa) ) {
            resultados += ` <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.profissao}</p>
            <p class="descricao-meta">${dado.introducao}</p>
            <p class="descricao-meta">${dado.desenvolvimento}</p>
            <p class="descricao-meta">${dado.resumo}</p>
            <a href="${dado.link}">Saiba mais sobre essa personagem</a> </div>
        `;
        }
    });

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados || "<p> Nada foi encontrado tente digitar o nome de uma personagem</p>";
}