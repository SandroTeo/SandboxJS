/**
 * Métricas:
 * - Quantidade de clientes
 * - Ranking de cores favoritas
 * - Ranking dos estados com mais quantidade de pessoas
 * - Média de idade
 * - Nome mais comum
 * - Área de profissão mais comum
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
const $divTotalClientes = document.querySelector('#total-clientes');
document.querySelector('#btn-processar').addEventListener('click', processar);

function processar() {
  const cores = clientes.map((cliente) => cliente.preferencias.cor);
  const coresUnicas = Array.from(new Set(cores));
  console.log(coresUnicas);
  preencherNaTela(coresUnicas);
  $divTotalClientes.textContent = `Total de Clientes : ${clientes.length}`;
  const $card = criarCard();
  $divTotalClientes.appendChild($card);
}
function criarCard() {
  const $div = document.createElement('div');
  $div.classList.toggle('card');
  $div.appendChild(document.createTextNode());
  return $div;
}

/* uso de filter e map
function processar() {
  const nomes = clientes
    .filter((cliente) => cliente.nome.includes(''))
    .map((cliente) => cliente.nome);
  console.log(clientes);
  preencherNaTela(nomes);
} */
