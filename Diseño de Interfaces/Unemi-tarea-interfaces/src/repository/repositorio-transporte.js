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
  
  export default Truck;
  

 
  

