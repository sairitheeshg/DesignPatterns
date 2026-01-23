import { Movie } from "../entities/movie";
import { Screen } from "../entities/screen";
import { Show } from "../entities/show";
import { CityEnum, Theater } from "../entities/theater";

export class TheaterManager{
    private cityTheaterMap = new Map<CityEnum,Theater[]>();
    constructor(){
    }

    addTheater(city:CityEnum, theater: Theater){
        let theaters: Theater[] = [];
        if(this.cityTheaterMap.has(city)){
            theaters = this.cityTheaterMap.get(city)!;
        }
        theaters.push(theater);
        this.cityTheaterMap.set(city,theaters);
    }

    getShows(city: CityEnum, date: Date, theater: Theater): Show[]{
        const shows: Show[] = [];
        this.cityTheaterMap.get(city)!.forEach(theater => {
            const screens = theater.getTheaterScreens();
            
            screens.forEach((screen) => {
                shows.push(...screen.getShowsByDate(date));
            });
        })

        return shows;
    }

    getShowsForMovie(theater: Theater,movie: Movie, city: CityEnum, date: Date){
        const shows: Show[] = [];
        this.cityTheaterMap.get(city)!.forEach(theater => {
            const screens = theater.getTheaterScreens();
            
            screens.forEach((screen) => {
                shows.push(...screen.getShowsByDate(date));
            });
        })

        return shows.filter(show => show.getMovie().id === movie.id);
    }

    getMovies(city: CityEnum, date: Date): Movie[] {
        const movieSet = new Set<Movie>();
        
        this.cityTheaterMap.get(city)!.forEach(theater => {
            const screens = theater.getTheaterScreens();
            screens.forEach((screen) => {
                const shows = screen.getShowsByDate(date);
                shows.forEach(show => {
                    movieSet.add(show.getMovie());
                });
            });
        });

        return Array.from(movieSet);
    }

    getTheaters(city:CityEnum,movie:Movie,date:Date){
        const theaters = this.cityTheaterMap.get(city);
        const theatersForMovie = theaters?.filter((theater) => {
            const screens = theater.getTheaterScreens();
            const shows = screens.map((screen) => {
                const shows = screen.getShowsByDate(date);
                return shows.filter(show => show.getMovie().id === movie.id);
            })

            return shows.length > 0;
        })

        return theatersForMovie;
    }
}