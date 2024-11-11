import assert from 'assert'
import { expect } from 'chai';
import Calculadora from '../src/Calculadora.js';

describe('Testes de soma:', () => {
  it('Deve somar 4 e 5 resultando em 9', () => {
    let resultado = Calculadora.soma(4, 5);
    expect(resultado).to.be.eq(9);
  });

  it('Deve somar -4 e 5 resultando em 1', () => {
    let resultado = Calculadora.soma(-4, 5);
    expect(resultado).to.be.eq(1);
  });
});

describe('Testes de subtração:', () => {
  it('Deve subtrair 4 e 5 resultando em -1', () => {
    let resultado = Calculadora.sub(4, 5);
    expect(resultado).to.be.eq(-1);
  });
});

describe('Testes de multiplicação:', () => {
  it('Deve multiplicar 4 e 5 resultando em 20', () => {
    let resultado = Calculadora.multi(4, 5);
    expect(resultado).to.be.eq(20);
  });
});

describe('Testes de divisão:', () => {
  it('Deve dividir 10 e 2 resultando em 5', () => {
    let resultado = Calculadora.divi(10, 2);
    expect(resultado).to.be.eq(5);
  });
});

describe('Testes de débito cardíaco:', () => {
  it('Deve calcular o débito cardíaco corretamente', () => {
    let VO2 = 250;   // Exemplo: 250 mL/min
    let CaO2 = 20;   // Exemplo: 20 mL O2/dL
    let CvO2 = 5;    // Exemplo: 5 mL O2/dL
    let resultado = Calculadora.debitoCardiaco(VO2, CaO2, CvO2);
    expect(resultado).to.be.closeTo(16.67, 0.01);  // Resultado esperado: 16,67 L/min
  });

  it('Deve lançar erro se a diferença entre CaO2 e CvO2 for zero', () => {
    let VO2 = 250;
    let CaO2 = 5;
    let CvO2 = 5;
    expect(() => Calculadora.debitoCardiaco(VO2, CaO2, CvO2)).to.throw('A diferença entre CaO2 e CvO2 não pode ser zero.');
  });
});
