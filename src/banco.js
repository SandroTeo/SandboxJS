import './styles.css';
import faker from 'faker';

faker.locale = 'pt_BR';

export let clientes = [];

export function preencherNaTela(valor) {
  $code.innerHTML = JSON.stringify(valor, null, '  ');
}

const $code = document.querySelector('#code');

function atualizar() {
  clientes = [];
  for (let i = 0; i < 200; i++) {
    clientes.push(criarContaBancaria());
  }

  $code.innerHTML = JSON.stringify(clientes.slice(0, 2), null, '  ');
}

document.querySelector('#btn-atualizar').addEventListener('click', function () {
  atualizar();
});

function criarContaBancaria() {
  return {
    nome: faker.name.findName(),
    idade: faker.random.number({ min: 18, max: 60 }),
    image: faker.image.avatar(),
    state: faker.address.state(),
    contaBancaria: {
      saldo: faker.finance.amount(),
      transacoes: Array(faker.random.number({ min: 3, max: 10 }))
        .fill(0)
        .map(faker.helpers.createTransaction)
    },
    profissao: {
      cargo: faker.name.jobTitle(),
      area: faker.name.jobArea(),
      salario: faker.random.number({ min: 1000, max: 10000 })
    },
    preferencias: {
      cor: faker.commerce.color()
    }
  };
}
