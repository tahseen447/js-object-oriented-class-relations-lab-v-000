// driver has many trips
// passenger has many trips
// trips
//// passenger
//// driver

let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = {drivers:[], passengers:[], trips:[]};

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(item =>{
        return item.passengerId = this.id;
    });
  }
  drivers(){
    return this.trips().map(item =>{
      return item.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  driver(){
    return store.drivers.find(item=>{
      return item.id = this.driverId;
    });
  }
  passenger(){
    return store.passengers.find(item => {
      return item.id = this.passengerId;
    });
  }
}
