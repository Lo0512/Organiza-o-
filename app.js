
function buscarResumoNutricional() {
  fetch("https://script.google.com/macros/s/AKfycbxUZtwpROxxpe6L03m8tflxj56XuxeQO-PSSZm3xwrDAsC0fY34J4Pt0xu3xnN8S-dN/exec") // substitua pela sua URL
    .then(response => response.text())
    .then(resumo => {
      document.getElementById("resultados-pesquisa").innerHTML = `
        <div class="item-resultado">
          <h2>🦋 Resumo Nutricional</h2>
          <p class="descricao-meta">${resumo.replace(/\n/g, "<br>")}</p>
        </div>
      `;
    })
    .catch(error => {
      console.error("Erro ao buscar resumo:", error);
    });
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    const campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Declare um titulo existente </p>";
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
        const pronts= String(dado.pronts).toLowerCase();
        const introducao = String(dado.introducao).toLowerCase();
        const desenvolvimento = String(dado.desenvolvimento).toLowerCase();
        const resumo = String(dado.resumo).toLowerCase();
        const prompts = String(dado.prompts).toLowerCase();

        if (titulo.includes(campoPesquisa) ) {
            resultados += ` <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.pronts}</p>
            <p class="descricao-meta">${dado.introducao}</p>
            <p class="descricao-meta">${dado.desenvolvimento}</p>
            <p class="descricao-meta">${dado.resumo}</p>
            <p class="descricao-meta">${dado.prompts}</p>
            <a href="${dado.link}">Saiba mais sobre essa personagem</a> </div>
        `;
        }
    });

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados || "<p> Nada foi encontrado tente digitar o nome de uma personagem</p>";
}






















