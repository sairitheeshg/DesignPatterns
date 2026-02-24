export enum VehicleType{
    TWO_WHEELER = "two_wheeler",
    FOUR_WHEELER = "four_wheeler"
}

export class Vehicle{
    constructor(public readonly plate:string, public readonly vehicleType:VehicleType){
    }
}