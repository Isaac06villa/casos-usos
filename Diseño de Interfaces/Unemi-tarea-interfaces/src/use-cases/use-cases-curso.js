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
  
  // Ejemplo de uso
  const curso = new Curso();
  curso.registrarNota(0, 3.5);
  curso.registrarNota(1, 4.0);
  curso.registrarNota(2, 2.5);
  const promedio = curso.calcularPromedio();
  console.log(`El promedio de notas es: ${promedio}`);
  const estudiantesEncimaDelPromedio = curso.cantidadEstudiantesEncimaDelPromedio();
  console.log(`La cantidad de estudiantes por encima del promedio es: ${estudiantesEncimaDelPromedio}`);
  