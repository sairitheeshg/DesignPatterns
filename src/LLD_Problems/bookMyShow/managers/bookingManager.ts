import { Booking } from "../entities/booking";
import { Payment, PaymentStatus } from "../entities/payment";
import { Seat } from "../entities/seat";
import { Show } from "../entities/show";
import { User } from "../entities/user";
import crypto, { UUID } from 'crypto';


export class BookingManager{
    private bookings = new Map<UUID, Booking>(); //bookingId, booking

    public book(user:User, show: Show, seatIds: number[]): Booking | null{
      //  const seatIds = seats.map(seat=>seat.getSeatId());
        if(show.confirmSeats(seatIds)){
            const payment = new Payment(PaymentStatus.SUCCESS);
            const bookingId = crypto.randomUUID();
            const booking = new Booking(bookingId,user.getUserId(),payment,seatIds,show);
            this.bookings.set(bookingId,booking);
            return booking;
        } else {
            console.log("Some of the seats are not available! Please try again")
            return null;
        }
    }

    public getBookingbyId(bookingId:UUID){
        return this.bookings.get(bookingId);
    }

    public getBookingsForUser(user:User){
        //return this.bookings.get(user.getUserId());
        const bookingsForUser = [];
        const userid = user.getUserId();
        for( const [key,value] of this.bookings){
            if(userid === value.getUserId()){
                bookingsForUser.push(value);
            }
        }
        return bookingsForUser;
    }
}