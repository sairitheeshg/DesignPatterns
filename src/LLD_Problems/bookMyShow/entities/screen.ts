import { Seat } from "./seat";
import { Show } from "./show";

export class Screen{

    private seats: Seat[];
    private screenId: number;
    private showsByDate = new Map<string,Show[]>(); //here It is map<dateisostring,show array>

    constructor(seats:Seat[],id:number){
        this.seats = seats;
        this.screenId = id;
    }

    public getSeats(): Seat[] {
        return this.seats;
    }

    public getShowsByDate(date: Date): Show[]{
        return this.showsByDate.get(this.getDateKey(date))!;
    }

    public addShows(show: Show): void{
        const dateKey = this.getDateKey(show.getShowDate());
        let shows: Show[] = [];
        if(this.showsByDate.has(dateKey)){
            shows = this.showsByDate.get(dateKey)!;
        }
        shows.push(show);
        this.showsByDate.set(dateKey,shows);
    }

    public getDateKey(date: Date): string{
        return new Date(date).toISOString().split('T')[0]!;
    }


}