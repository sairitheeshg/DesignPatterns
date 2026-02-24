import { Spot } from "./spot";
import { Vehicle } from "./vehicle";

export class Ticket{
    constructor( 
        public readonly vehicle:Vehicle,
        public readonly spot: Spot,
        public readonly entryTime: Date
    ){}
}