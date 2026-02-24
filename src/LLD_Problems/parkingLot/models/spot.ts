/*
spot

id
spotType
isFree
occupySpot(vehicle)
releaseSpot(vehicle)
getters and setter
*/

import { Vehicle } from "./vehicle";

export enum SpotType{
    TWO_WHEELER = "two_wheeler",
    FOUR_WHEELER = "four_wheeler"
}

export class Spot{
    private isEmpty:boolean = true;
    private vehicle: Vehicle|null = null;
    constructor(public readonly id: number, public readonly spotType:SpotType){
    }

    public isAvailable(){
        return this.isEmpty;
    }

    public occupySpot(v: Vehicle){
        this.vehicle = v;
        this.isEmpty = false;
    }

    public releaseSpot(){
        this.vehicle = null;
        this.isEmpty = true;
    }

    public getVehicle(){
        return this.vehicle;
    }
}