class Truck {
    constructor(plateNumber, maxCapacity, fuelConsumption) {
      this.plateNumber = plateNumber;
      this.maxCapacity = maxCapacity;
      this.fuelConsumption = fuelConsumption;
      this.currentLoad = 0;
    }
  
    getPlateNumber() {
      return this.plateNumber;
    }
  
    getMaxCapacity() {
      return this.maxCapacity;
    }
  
    getFuelConsumption() {
      return this.fuelConsumption;
    }
  
    getCurrentLoad() {
      return this.currentLoad;
    }
  
    setCurrentLoad(load) {
      this.currentLoad = load;
    }
  }
  
  class TransportCompany {
    constructor() {
      this.trucks = [];
    }
  
    addTruck(truck) {
      this.trucks.push(truck);
    }
  
    removeTruck(truck) {
      const index = this.trucks.indexOf(truck);
      if (index !== -1) {
        this.trucks.splice(index, 1);
      }
    }
  
    getTrucks() {
      return this.trucks;
    }
  }
  
  class Cargo {
    constructor(description, weight) {
      this.description = description;
      this.weight = weight;
    }
  
    getDescription() {
      return this.description;
    }
  
    getWeight() {
      return this.weight;
    }
  }
  
  class TransportManagementSystem {
    constructor(transportCompany) {
      this.transportCompany = transportCompany;
    }
  
    loadCargoOnTruck(cargo, truck) {
      if (cargo.getWeight() > truck.getMaxCapacity() - truck.getCurrentLoad()) {
        return false;
      }
  
      truck.setCurrentLoad(truck.getCurrentLoad() + cargo.getWeight());
      return true;
    }
  
    unloadCargoFromTruck(truck) {
      truck.setCurrentLoad(0);
      return true;
    }
  
    findBestTruckForCargo(cargo) {
      let bestTruck = null;
      let bestFuelConsumption = Number.MAX_VALUE;
  
      for (const truck of this.transportCompany.getTrucks()) {
        if (cargo.getWeight() <= truck.getMaxCapacity() - truck.getCurrentLoad()) {
          const fuelConsumption = truck.getFuelConsumption();
          if (fuelConsumption < bestFuelConsumption) {
            bestFuelConsumption = fuelConsumption;
            bestTruck = truck;
          }
        }
      }
  
      return bestTruck;
    }
  }
  
  