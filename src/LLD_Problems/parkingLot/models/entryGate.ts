import { ParkingSpotManager } from "../managers/parkingSpotManager";
import { DefaultParkingStrategy } from "../parkingStrategies/parkingStrategy";
import { Spot, SpotType } from "./spot";
import { Ticket } from "./ticket";
import { Vehicle, VehicleType } from "./vehicle";

export class EntryGate{
    //id, enterVehicle -> which parks the vehicle and generates Ticket, store EntryTime
    // it should have parkingSpotManager
    constructor(public readonly id:number, private spotManager: ParkingSpotManager){

    }

    enterVehicle(v:Vehicle): Ticket {
        const spot = this.parkVehicle(v);
        if(!spot){
            throw new Error("No Spot Available");
        }

        const ticket = new Ticket(v, spot, new Date());
        return ticket;
    }


    private parkVehicle(v:Vehicle): Spot| null {
            const spotType = this.mapVehicleTypeToSpot(v.vehicleType);
            const spot = this.spotManager.findAvailableSpot(spotType, new DefaultParkingStrategy());
    
            if(spot){
                spot.occupySpot(v);
                return spot;
            }
            return null;
    }

    private mapVehicleTypeToSpot(vehicleType: VehicleType){
             switch(vehicleType){
                case VehicleType.FOUR_WHEELER: return SpotType.FOUR_WHEELER;
                case VehicleType.TWO_WHEELER: return SpotType.TWO_WHEELER;
             }
        }
}