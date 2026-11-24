const manometros = {
  "MAN-DEMO-001": {"local": "Setor fictício 2", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-001-A", "CERT-DEMO-001-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-002": {"local": "Setor fictício 3", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-002-A", "CERT-DEMO-002-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-003": {"local": "Setor fictício 4", "escala": "0–25 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-003-A", "CERT-DEMO-003-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-004": {"local": "Setor fictício 5", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-004-A", "CERT-DEMO-004-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-005": {"local": "Setor fictício 1", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-005-A", "CERT-DEMO-005-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-006": {"local": "Setor fictício 2", "escala": "0–16 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-007": {"local": "Setor fictício 3", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-008": {"local": "Setor fictício 4", "escala": "0–6 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-009": {"local": "Setor fictício 5", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-009-A", "CERT-DEMO-009-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-010": {"local": "Setor fictício 1", "escala": "0–16 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-011": {"local": "Setor fictício 2", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-012": {"local": "Setor fictício 3", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-012-A", "CERT-DEMO-012-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-013": {"local": "Setor fictício 4", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-013-A", "CERT-DEMO-013-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-014": {"local": "Setor fictício 5", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-014-A", "CERT-DEMO-014-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-015": {"local": "Setor fictício 1", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-016": {"local": "Setor fictício 2", "escala": "0–6 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-017": {"local": "Setor fictício 3", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-017-A", "CERT-DEMO-017-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-018": {"local": "Setor fictício 4", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-018-A", "CERT-DEMO-018-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-019": {"local": "Setor fictício 5", "escala": "0–25 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-019-A", "CERT-DEMO-019-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-020": {"local": "Setor fictício 1", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-020-A", "CERT-DEMO-020-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-021": {"local": "Setor fictício 2", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-021-A", "CERT-DEMO-021-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-022": {"local": "Setor fictício 3", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-022-A", "CERT-DEMO-022-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-023": {"local": "Setor fictício 4", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["", "Verificação de exemplo"]},
  "MAN-DEMO-024": {"local": "Setor fictício 5", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-024-A", "CERT-DEMO-024-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-025": {"local": "Setor fictício 1", "escala": "0–10 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-026": {"local": "Setor fictício 2", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-026-A", "CERT-DEMO-026-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-027": {"local": "Setor fictício 3", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-028": {"local": "Setor fictício 4", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-028-A", "CERT-DEMO-028-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-029": {"local": "Setor fictício 5", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-029-A", "CERT-DEMO-029-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-030": {"local": "Setor fictício 1", "escala": "0–16 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-031": {"local": "Setor fictício 2", "escala": "0–25 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-031-A", "CERT-DEMO-031-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-032": {"local": "Setor fictício 3", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-032-A", "CERT-DEMO-032-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-033": {"local": "Setor fictício 4", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-033-A", "CERT-DEMO-033-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-034": {"local": "Setor fictício 5", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-034-A", "CERT-DEMO-034-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-035": {"local": "Setor fictício 1", "escala": "0–25 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-035-A", "CERT-DEMO-035-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-036": {"local": "Setor fictício 2", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-036-A", "CERT-DEMO-036-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-037": {"local": "Setor fictício 3", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-037-A", "CERT-DEMO-037-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-038": {"local": "Setor fictício 4", "escala": "0–16 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-039": {"local": "Setor fictício 5", "escala": "0–25 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-039-A", "CERT-DEMO-039-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-040": {"local": "Setor fictício 1", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-040-A", "CERT-DEMO-040-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-041": {"local": "Setor fictício 2", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-041-A", "CERT-DEMO-041-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-042": {"local": "Setor fictício 3", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-042-A", "CERT-DEMO-042-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-043": {"local": "Setor fictício 4", "escala": "0–25 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-043-A", "CERT-DEMO-043-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-044": {"local": "Setor fictício 5", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-044-A", "CERT-DEMO-044-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-045": {"local": "Setor fictício 1", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-045-A", "CERT-DEMO-045-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-046": {"local": "Setor fictício 2", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-046-A", "CERT-DEMO-046-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-047": {"local": "Setor fictício 3", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-048": {"local": "Setor fictício 4", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-048-A", "CERT-DEMO-048-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-049": {"local": "Setor fictício 5", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-049-A", "CERT-DEMO-049-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-050": {"local": "Setor fictício 1", "escala": "0–16 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-051": {"local": "Setor fictício 2", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-052": {"local": "Setor fictício 3", "escala": "0–6 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-052-A", "CERT-DEMO-052-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-053": {"local": "Setor fictício 4", "escala": "0–10 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-054": {"local": "Setor fictício 5", "escala": "0–16 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-055": {"local": "Setor fictício 1", "escala": "0–25 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-056": {"local": "Setor fictício 2", "escala": "0–6 bar", "instalacao": "", "certificados": ["", ""], "observacoes": ["Inspeção de exemplo", ""]},
  "MAN-DEMO-057": {"local": "Setor fictício 3", "escala": "0–10 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-057-A", "CERT-DEMO-057-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-058": {"local": "Setor fictício 4", "escala": "0–16 bar", "instalacao": "OK", "certificados": ["CERT-DEMO-058-A", "CERT-DEMO-058-B"], "observacoes": ["Inspeção de exemplo", "Verificação de exemplo"]},
  "MAN-DEMO-059": {"local": "Setor fictício 5", "escala": "", "instalacao": "", "certificados": ["CERT-DEMO-059-A", ""], "observacoes": ["", ""]}
};

// Os dados fictícios ficam incorporados para a demonstração funcionar offline.
const seletorManometro = document.querySelector('#manometro');
const localManometro = document.querySelector('#local-manometro');
const escalaManometro = document.querySelector('#escala-manometro');
const instalacaoManometro = document.querySelector('#instalacao-manometro');
const camposCertificados = [1, 2].map(numero => ({
  codigo: document.querySelector('#certificado-' + numero),
  observacao: document.querySelector('#observacao-' + numero)
}));

for (const identificador of Object.keys(manometros)) {
  seletorManometro.add(new Option(identificador, identificador));
}

function mostrarManometro() {
  const { local, escala, instalacao, certificados, observacoes } = manometros[seletorManometro.value];
  localManometro.textContent = local;
  escalaManometro.textContent = escala || 'Não informada';
  instalacaoManometro.textContent = instalacao || 'Sem situação registrada';

  camposCertificados.forEach(({ codigo, observacao }, indice) => {
    codigo.textContent = certificados[indice] || 'Certificado não registrado';
    observacao.textContent = observacoes[indice];
    observacao.hidden = !observacoes[indice];
  });
}

seletorManometro.addEventListener('change', mostrarManometro);
mostrarManometro();
