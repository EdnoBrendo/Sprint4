export default class Calculadora {
    static soma(a, b) {
      return a + b;
    }
  
    static sub(a, b) {
      return a - b;
    }

    static multi(a, b) {
        return a * b;
      }

      static divi(a, b) {
        return a / b;
      }


      static debitoCardiaco(VO2, CaO2, CvO2) {
        if (CaO2 - CvO2 === 0) {
          throw new Error('A diferença entre CaO2 e CvO2 não pode ser zero.');
        }
        return VO2 / (CaO2 - CvO2);  // UNIDADE DE MEDIDA É O L/min
      }
}
  
  