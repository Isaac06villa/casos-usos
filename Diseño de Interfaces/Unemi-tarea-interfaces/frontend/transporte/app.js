function buscarMejorCamion(carga) {
    var mejor_camion = null;
    var mejor_consumo = Infinity;
    
    for (var i = 0; i < camiones.length; i++) {
      var camion = camiones[i];
      if (camion.carga_actual + carga <= camion.capacidad) {
        if (camion.consumo < mejor_consumo) {
          mejor_camion = camion;
          mejor_consumo = camion.consumo;
        }
      }
    }
    
    if (mejor_camion == null) {
      alert("No hay ningún camión disponible para transportar esa carga.");
    } else {
      alert("El mejor camión disponible para transportar " + carga + " kilogramos es el camión con matrícula " + mejor_camion.matricula + ", que tiene un consumo de " + mejor_camion.consumo + " galones/kilómetro.");
    }
  }
  