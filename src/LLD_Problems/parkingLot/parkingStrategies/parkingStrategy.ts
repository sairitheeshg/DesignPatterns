import { Spot } from "../models/spot";

export interface ParkingStrategy{
    findSpot(spots: Spot[]): Spot|null;
}

export class DefaultParkingStrategy implements ParkingStrategy{
    findSpot(spots: Spot[]): Spot | null {
        return spots.find(spot => spot.isAvailable()) || null;
    }
}