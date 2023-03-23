const Estudiante = require("./estudiante");

class Curso {
  constructor() {
    this.estudiantes = new Array(12).fill(null).map(() => new Estudiante());
  }

  registrarNota(estudianteId, nota) {
    const estudiante = this.estudiantes[estudianteId];
    estudiante.setNota(nota);
  }

  calcularPromedio() {
    const notas = this.estudiantes.map((estudiante) => estudiante.getNota());
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    return promedio;
  }

  cantidadEstudiantesEncimaDelPromedio() {
    const promedio = this.calcularPromedio();
    const estudiantesEncimaDelPromedio = this.estudiantes.filter(
      (estudiante) => estudiante.getNota() > promedio
    );
    return estudiantesEncimaDelPromedio.length;
  }
}

module.exports = Curso;
