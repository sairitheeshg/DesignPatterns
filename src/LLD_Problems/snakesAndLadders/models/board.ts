import { Jump, JumpType } from "./jump";

export class Board {
    private size: number;
    private snakes: Map<number,Jump>;
    private ladders: Map<number,Jump>;

    constructor(n:number){
        this.size = n;
        this.snakes = new Map();
        this.ladders = new Map();
    }

    public addSnakes(start:number,end:number){
        //validate start and end correctly in interviews
        this.snakes.set(start,new Jump(JumpType.SNAKE,start,end));
    }

    public addLadders(start:number,end:number){
        //validate start and end correctly in interviews
        this.ladders.set(start,new Jump(JumpType.LADDER,start,end));
    }

    public getNextPos(curPos:number, roll:number) : number{
        const newPos = curPos + roll;
        if(newPos > this.size) return curPos;

        //check if snake is at this newPos
        if(this.snakes.has(newPos)){
            return this.snakes.get(newPos)!.endPos;
        }

        //check if Ladder is at this newPos
        if(this.ladders.has(newPos)){
            return this.ladders.get(newPos)!.endPos;
        }

        return newPos;
    }

}