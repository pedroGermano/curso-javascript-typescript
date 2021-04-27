const pessoa1 = {
  nome: 'Pedro',
  sobrenome: 'Germano',
  idade: 32,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementarIdade() {
    this.idade++;
  },
};
