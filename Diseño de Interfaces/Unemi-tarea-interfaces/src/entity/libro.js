// Función que calcula la identidad de una matriz cuadrada
function identityMatrix(n) {
    let identity = [];
  
    // Creamos la matriz con ceros
    for (let i = 0; i < n; i++) {
      identity.push([]);
      for (let j = 0; j < n; j++) {
        identity[i].push(0);
      }
    }
  
    // Asignamos 1 en la diagonal principal
    for (let i = 0; i < n; i++) {
      identity[i][i] = 1;
    }
  
    return identity;
  }
  
  // Ejemplo de uso
  const matrizIdentidad = identityMatrix(4);
  console.log(matrizIdentidad);
  