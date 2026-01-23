import { Screen } from "./screen";

export enum CityEnum {
    BANGALORE = "BANGALORE",
    HYDERABAD = "HYDERABAD"
}

export class Theater{
    constructor(
        private name:string, 
        private city: string, 
        private ScreenList: Screen[]
    ){
    }

    getTheaterCity(){
        return this.city;
    }

    getTheaterScreens(){
        return this.ScreenList;
    }

    
}