class Estudiante {
    constructor() {
      this.id = null;
      this.nota = null;
    }
  
    getId() {
      return this.id;
    }
  
    getNota() {
      return this.nota;
    }
  
    setNota(nota) {
      if (nota >= 0 && nota <= 5) {
        this.nota = nota;
      } else {
        throw new Error("La nota debe ser un valor entre 0 y 5.");
      }
    }
  }
  
  module.exports = Estudiante;
  