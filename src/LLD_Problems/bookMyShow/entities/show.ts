import { Movie } from "./movie";
import { seatStatus } from "./seat";
import { Screen } from "./screen";

export class Show{
    private movie: Movie;
    private startTime: Date;
    private seatStatusMap: Map<number,seatStatus> = new Map<number,seatStatus>();
    
    constructor(movie:Movie, screen:Screen, startTime:Date){
        this.movie = movie;
        this.startTime = startTime;

        const searArr = screen.getSeats();
        searArr.forEach((seat) => {
            this.seatStatusMap.set(seat.getSeatId(),seatStatus.AVAILABLE);
        })
    }

    getMovie(): Movie{
        return this.movie;
    }

    //LockSeat() this actually not needed in nodejs but we will need this in
    // multithreaded languages like java

    confirmSeats(seatIds: number[]): boolean{
        seatIds.sort(); //sort to make sure that when we lock, there is no deadlock 
        for(let seatId of seatIds){
            if(this.seatStatusMap.get(seatId)! !== seatStatus.AVAILABLE){
                console.log("Selected Seats are Not Available, Please try again!");
                return false;
            }
            this.seatStatusMap.set(seatId,seatStatus.BOOKED);
        }
        return true;
    }

    getShowDate(){
        return this.startTime;
    }

}