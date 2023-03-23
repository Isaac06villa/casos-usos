class Truck {
    constructor(registration, capacity, consumption) {
      this.registration = registration;
      this.capacity = capacity;
      this.consumption = consumption;
      this.currentLoad = 0;
    }
  
    getAvailableCapacity() {
      return this.capacity - this.currentLoad;
    }
  
    loadCargo(cargo) {
      if (this.getAvailableCapacity() >= cargo.weight) {
        this.currentLoad += cargo.weight;
        return true;
      }
      return false;
    }
  
    unloadCargo(cargo) {
      this.currentLoad -= cargo.weight;
    }
  
    calculateTripCost(distance) {
      return this.consumption * distance;
    }
  }
  
  module.exports = Truck;
  


class Cargo {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }
  }
  
  module.exports = Cargo;
  