export enum seatType {
    PLATINUM = "PLATINUM",
    GOLD = "GOLD",
    SILVER = "SILVER"
}

export enum seatStatus {
    AVAILABLE = "AVAILABLE",
    LOCKED = "LOCKED",
    BOOKED = "BOOKED"
}

export class Seat {
    constructor(private id:number, private seatType: seatType){
    }

    public getSeatId():number{
        return this.id;
    }
}

