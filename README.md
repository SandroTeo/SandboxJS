# JavaScript Objects

```javascript
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Tibúrcio',
  idade: 28,
  isProgramador: true,
  linguagensFavoritas: ['JavaScript', 'Java', 'C#'],
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
  contaBancaria: {
    saldo: 1000,
    limiteCredito: 2000
  }
};

const cores = clientes.map((cliente) => cliente.preferencias.cor);
const quantidadePorCor = {};

cores.forEach((cor) => {
  if (quantidadePorCor[cor]) {
    quantidadePorCor[cor]++;
  } else {
    quantidadePorCor[cor] = 1;
  }
});

const coresQuantidades = Object.entries(quantidadePorCor).map((valores) => {
  return {
    cor: valores[0],
    quantidade: valores[1]
  };
});

const ranking = coresQuantidades
  .sort((cor1, cor2) => {
    if (cor1.quantidade > cor2.quantidade) {
      return -1;
    } else if (cor1.quantidade === cor2.quantidade) {
      return 0;
    } else {
      return 1;
    }
  })
  .map((valores, i) => `${i}: ${valores.cor} - ${valores.quantidade}`);

preencherNaTela(ranking);
```
