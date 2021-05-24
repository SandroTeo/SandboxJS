/**
 * Métricas:
 * - Quantidade de clientes
 * - Ranking de cores favoritas
 * - Ranking dos estados com mais quantidade de pessoas
 * - Média de idade
 * - Nome mais comum(só o primeiro)
 * - Área de profissão mais comum(só o primeiro)
 * - Menor, maior e média salarial
 * - Menor e maior saldo
 * - Total de valor depositado (deposit)
 * - Total de valor pago (payment)
 * - Total de valor sacado (withdrawal)
 * - Total de vezes que realizou pagamento (payment) e total pago
 * - Total de vezes que pediu um recibo (invoice)
 * - Total de valor transacionado (tudo)
 * - Renderizar a conta bancária das pessoas
 */

import { clientes, preencherNaTela } from './banco';

const $content = document.querySelector('#content');
document.querySelector('#btn-processar').addEventListener('click', processar);
document
  .querySelector('#btn-rankinkEstados')
  .addEventListener('click', rankingEstados);
document.querySelector('#btn-coresUnicas').addEventListener('click', ui);

function rankingEstados() {
  const estados = clientes.map((cliente) => cliente.state);
  const estadosUnicos = Array.from(new Set(estados));

  const quantidadePorEstado = [
    // [ estado: 'RN', quantidade:10],
    // [ estado: 'PB', quantidade:10],
  ];

  estadosUnicos.forEach((estado) => {
    //lista estados e a quantidade de clientes sem estar em ordem
    const quantidade = estados.filter((estadoAtual) => estadoAtual === estado)
      .length;

    console.log(estado, quantidade);
    preencherNaTela(quantidadePorEstado);

    quantidadePorEstado.push({
      estado,
      quantidade
    });
  });

  const ranking = quantidadePorEstado
    .sort((e1, e2) => {
      if (e1.quantidade === e2.quantidade) {
        return 0;
      }

      if (e1.quantidade < e2.quantidade) {
        return 1;
      } else {
        return -1;
      }
    })
    .map(
      (estadoData, i) =>
        `${i + 1}:  ${estadoData.estado} - Quantidade ${estadoData.quantidade}`
    );

  preencherNaTela(ranking);
}

function processar() {
  const cores = clientes.map((cliente) => cliente.preferencias.cor);
  const coresUnicas = Array.from(new Set(cores));
  preencherNaTela(coresUnicas);

  $content.textContent = `Total de Clientes : ${clientes.length}`;
}

function CoresU() {
  const cores = clientes.map((cliente) => cliente.preferencias.cor);
  const $coresUnicas = Array.from(new Set(cores));
  return $coresUnicas;
}

function ui() {
  const $card = criarCard('Cores Unicas:', CoresU);
  $content.appendChild($card);
}

function criarCard(header, texto) {
  const $div = document.createElement('div');
  $div.classList.toggle('card');
  const $header = createHeader(header);
  $div.appendChild($header);

  text($div, 'card');
  return $div;
}

function createHeader(texto) {
  const $header = document.createElement('h4');
  text($header, texto);
  return $header;
}

function text($el, texto) {
  $el.appendChild(document.createTextNode(texto));
}
