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
  
  module.exports = Cargo;