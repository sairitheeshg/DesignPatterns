import { Movie } from "./entities/movie";
import { Screen } from "./entities/screen";
import { Seat, seatType } from "./entities/seat";
import { Show } from "./entities/show";
import { CityEnum, Theater } from "./entities/theater";
import { User } from "./entities/user";
import { BookingManager } from "./managers/bookingManager";
import { TheaterManager } from "./managers/theaterManager";

export class BookMyShow{
    private theaterManager: TheaterManager;
    private bookingManager: BookingManager;
    
    constructor(){

        const seat1 = new Seat(1,seatType.PLATINUM);
        const seat2 = new Seat(2,seatType.PLATINUM);
        const seat3 = new Seat(3,seatType.PLATINUM);



        const screen1 = new Screen([seat1,seat2,seat3],1);
        const t1 = new Theater("PVR", CityEnum.HYDERABAD, [screen1]);

        this.theaterManager = new TheaterManager();
        this.bookingManager = new BookingManager();

        this.theaterManager.addTheater(CityEnum.HYDERABAD,t1);

        const movie = new Movie(1,"BAHUBALI",155);
        const movie2 = new Movie(2,"KALKI",180);

        const show = new Show(movie,screen1,new Date("2026-01-28"));
        const show2 = new Show(movie2,screen1,new Date("2026-01-28"));

        screen1.addShows(show);
        screen1.addShows(show2);
    }


    public startUserFlow(){
        const user1 = new User(1,"Ritheesh");


        const movies = this.theaterManager.getMovies(CityEnum.HYDERABAD,new Date("2026-01-28"));
        console.log(movies);

        const theatersForSelectedMovie = this.theaterManager.getTheaters(CityEnum.HYDERABAD,movies[0]!,new Date('2026-01-28'))!;
        console.log(theatersForSelectedMovie);

        const shows = this.theaterManager.getShowsForMovie(theatersForSelectedMovie[0]!,movies[0]!,CityEnum.HYDERABAD,new Date("2026-01-28"));   
        console.log(shows);

        const seats = [1,2,3]

        const booking = this.bookingManager.book(user1,shows[0]!,seats);
        console.log(booking);
    }
}


