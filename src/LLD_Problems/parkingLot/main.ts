import { Spot, SpotType } from "./models/spot";
import { Vehicle, VehicleType } from "./models/vehicle";
import { ParkingLot } from "./parkingLot";

const spots : Spot[] = [];

spots.push(new Spot(1,SpotType.TWO_WHEELER));
spots.push(new Spot(2,SpotType.TWO_WHEELER));
spots.push(new Spot(3,SpotType.TWO_WHEELER));
spots.push(new Spot(4,SpotType.TWO_WHEELER));

spots.push(new Spot(5,SpotType.FOUR_WHEELER));
spots.push(new Spot(6,SpotType.FOUR_WHEELER));
spots.push(new Spot(7,SpotType.FOUR_WHEELER));


const parkingLot = new ParkingLot(spots);


const v1 = new Vehicle("KA 01", VehicleType.TWO_WHEELER);
const v2 = new Vehicle("KA 02", VehicleType.FOUR_WHEELER);


const t1 = parkingLot.parkVehicle(v1);
const t2 = parkingLot.parkVehicle(v2);

const spot1 = t1.spot;
const spot2 = t2.spot;


console.log(t1);
console.log(t2);

parkingLot.unParkVehicle(t1);
parkingLot.unParkVehicle(t2);


console.log("Post Unpark spot1", spot1);
console.log("Post Unpark spot2", spot2);