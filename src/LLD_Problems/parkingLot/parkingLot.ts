import { ParkingSpotManager } from "./managers/parkingSpotManager";
import { EntryGate } from "./models/entryGate";
import { ExitGate } from "./models/exitGate";
import { Spot } from "./models/spot";
import { Ticket } from "./models/ticket";
import { Vehicle } from "./models/vehicle";

export class ParkingLot{
    private entryGate:EntryGate;
    private exitGate: ExitGate; 
    private spotManager: ParkingSpotManager;
    
    constructor(spots: Spot[]){
        this.spotManager = new ParkingSpotManager(spots);
        this.entryGate = new EntryGate(1,this.spotManager);
        this.exitGate = new ExitGate(1,this.spotManager);
    }

    parkVehicle(vehicle: Vehicle){
        return this.entryGate.enterVehicle(vehicle);
    }

    unParkVehicle(ticket:Ticket){
        return this.exitGate.exitVehicle(ticket);
    }
}