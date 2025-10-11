document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("categorias-container");

  dados.forEach(categoria => {
    const card = document.createElement("div");
    card.className = "categoria-card";
    card.innerHTML = `<strong>${categoria.titulo}</strong><br><small>${categoria.pronts}</small>`;
    card.onclick = () => mostrarPrompts(categoria.titulo);
    container.appendChild(card);
  });
});

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
      <p class="descricao-meta"><strong>Prompts:</strong></p>
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
      <p class="descricao-meta">Aqui você pode escrever sua reflexão ou plano de ação com base neste prompt.</p>
    </div>
  `;
}
