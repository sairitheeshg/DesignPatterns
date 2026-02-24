export class Dice{
    constructor(private sides:number = 6){
    }

    public roll():number{
        return Math.floor(this.sides*Math.random())+1;
    }
}