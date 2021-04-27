function criarPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criarPessoa('Pedro', 'Germano', 32);
console.log(pessoa1.nome);
