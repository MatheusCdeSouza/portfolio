document.addEventListener('pointerdown', () => {
  document.documentElement.classList.add('foco-por-ponteiro');
});

document.addEventListener('keydown', () => {
  document.documentElement.classList.remove('foco-por-ponteiro');
});

const navigation = performance.getEntriesByType('navigation')[0];

if (navigation?.type === 'reload') {
  const previousRestoration = history.scrollRestoration;
  history.scrollRestoration = 'manual';

  const url = new URL(location.href);
  if (url.hash) {
    url.hash = '';
    history.replaceState(history.state, '', url.href);
  }

  window.addEventListener('pageshow', () => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      history.scrollRestoration = previousRestoration;
    });
  }, { once: true });
}

document.addEventListener('DOMContentLoaded', () => {
  for (const link of document.querySelectorAll('.control-list a[href^="#demonstracao"]')) {
    const janela = document.querySelector(link.hash);
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      event.preventDefault();
      janela.showModal();
    });

    for (const retorno of janela.querySelectorAll('.demo-navigation a')) {
      retorno.addEventListener('click', () => janela.close());
    }
  }
});
