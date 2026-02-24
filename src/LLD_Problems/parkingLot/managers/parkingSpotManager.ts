import { Spot, SpotType } from "../models/spot";
import { Vehicle, VehicleType } from "../models/vehicle";
import { DefaultParkingStrategy, ParkingStrategy } from "../parkingStrategies/parkingStrategy";

export class ParkingSpotManager{
    private spots: Map<SpotType,Spot[]> = new Map();
    // private vehicleSpotMap: Map<Vehicle,Spot> = new Map();

    constructor(parkingSpots: Spot[]){
        parkingSpots.forEach(spot => {
            this.addSpot(spot);
        })
    }

    findAvailableSpot(spotType: SpotType, strategy: ParkingStrategy): Spot | null {
        const spots = this.spots.get(spotType) || [];
        return strategy.findSpot(spots);
    }

    addSpot(spot:Spot){
        const spotType = spot.spotType;
            if(this.spots.has(spotType)){
                const arr = this.spots.get(spotType)!;
                arr.push(spot);
                this.spots.set(spotType,arr);
            } else {
                const arr = [spot];
                this.spots.set(spotType,arr);
            }
    }

    removeSpot(spot:Spot){
        const spotType = spot.spotType;
            if(this.spots.has(spotType)){
                let arr = this.spots.get(spotType)!;
                arr = arr.filter(pSpot => pSpot.id!==spot.id);
                this.spots.set(spotType,arr);
            }
    }

}


/*
spots w.r.t spotType
it should give available spot
it should parkVehicle
it should releaseVehicle
addParkingSpots
removeParkingspots
*/