function mostrarPrompts(tituloCategoria) {
  const categoria = dados.find(item => item.titulo === tituloCategoria);
  const container = document.getElementById("resultados-pesquisa");

  if (!categoria) {
    container.innerHTML = "<p>Categoria não encontrada.</p>";
    return;
  }

  let html = `
    <div class="item-resultado">
      <h2>${categoria.titulo}</h2>
      <p class="descricao-meta"><em>${categoria.pronts}</em></p>
      <p class="descricao-meta">${categoria.introducao}</p>
      <p class="descricao-meta">${categoria.desenvolvimento}</p>
      <p class="descricao-meta">${categoria.resumo}</p>
      <p class="descricao-meta"><strong>Temas:</strong></p>
      <div class="tags-prompts">
        ${categoria.prompts.map(p => `<span class="tag" onclick="executarPrompt('${p}')">${p}</span>`).join("")}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function executarPrompt(promptSelecionado) {
  const container = document.getElementById("resultados-pesquisa");
  container.innerHTML = `
    <div class="item-resultado">
      <h2>🔍 Análise Inteligente</h2>
      <p class="descricao-meta">Você selecionou: <strong>${promptSelecionado}</strong></p>
      <p class="descricao-meta">A IA está gerando insights com base nos seus dados e princípios da neurociência...</p>
    </div>
  `;

  // Aqui você pode integrar com Copilot ou outro agente IA
  // Exemplo: enviar o prompt para análise e exibir o resultado
}











