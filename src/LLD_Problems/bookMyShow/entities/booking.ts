import { UUID } from "crypto";
import { Payment } from "./payment";
import { Show } from "./show";

export class Booking{
    constructor(
        private bookingId:UUID,
        private userId:number,
        private payment: Payment,
        private seatList: number[],
        private show: Show
    ){

    }

    getUserId(): number {
        return this.userId;
    }
}