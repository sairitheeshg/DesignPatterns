import { ParkingSpotManager } from "../managers/parkingSpotManager";
import { SpotType } from "./spot";
import { Ticket } from "./ticket";

export class ExitGate{
    private basePrice = {
        [SpotType.TWO_WHEELER] : 10,
        [SpotType.FOUR_WHEELER]: 40
    }

    constructor(public readonly id:number,private spotManager: ParkingSpotManager){

    }

    private calculateFee(ticket: Ticket){
        const entryTime = ticket.entryTime;
        const exitTime = new Date();

        const duration = exitTime.getTime() - entryTime.getTime();
        const hrs = Math.ceil(duration/(1000*60*60));

        return hrs*this.basePrice[ticket.spot.spotType];
    }

    exitVehicle(ticket: Ticket){
        const fee = this.calculateFee(ticket);
        console.log("Please Pay the amount ", ticket.vehicle.plate, fee );
        this.unParkVehicle(ticket);
    }

    private unParkVehicle(ticket:Ticket){
        const spot = ticket.spot;
        spot.releaseSpot();
    }
}