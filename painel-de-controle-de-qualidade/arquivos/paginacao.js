function mostrarPaginacao(navegacao, totalPaginas, paginaAtual, selecionarPagina) {
  const inicio = Math.max(0, Math.min(paginaAtual - 2, totalPaginas - 5));
  const botoes = [];
  let botaoAtual;

  function adicionarBotao(pagina, rotulo = String(pagina + 1)) {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'button';
    botao.textContent = rotulo;
    if (rotulo !== 'Última página') {
      botao.setAttribute('aria-label', 'Página ' + (pagina + 1));
      if (pagina === paginaAtual) {
        botao.setAttribute('aria-current', 'page');
        botaoAtual = botao;
      }
    }
    botao.addEventListener('click', () => {
      selecionarPagina(pagina).focus({ preventScroll: true });
    });
    botoes.push(botao);
    return botao;
  }

  for (let pagina = 0; pagina < Math.min(inicio, 2); pagina += 1) {
    adicionarBotao(pagina);
  }
  if (inicio > 2) {
    const reticencias = document.createElement('span');
    reticencias.textContent = '…';
    reticencias.setAttribute('aria-hidden', 'true');
    botoes.push(reticencias);
  }
  for (let pagina = inicio; pagina < Math.min(inicio + 5, totalPaginas); pagina += 1) {
    adicionarBotao(pagina);
  }
  if (totalPaginas > 5) {
    adicionarBotao(totalPaginas - 1, 'Última página').disabled = paginaAtual === totalPaginas - 1;
  }

  navegacao.replaceChildren(...botoes);
  return botaoAtual;
}
