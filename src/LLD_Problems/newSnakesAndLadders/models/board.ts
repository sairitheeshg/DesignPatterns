import { Cell } from "./cell";
import { JumpType } from "./jump";
import { Jump } from "./jump";

export class Board{
    private cells: Cell[] = [];
    private size = 100;

    constructor(n:number){
        this.size = n;
        this.cells = Array.from({length:n+1},(val,i) => new Cell(i));
    }

    public getSize(){
        return this.size;
    }

    public addJump(start:number, end:number, jumpType:JumpType){
        if(start === 0 || end === this.size) return;
        if(start <0 || start > this.size) return;
        if(end <0 || end > this.size) return;
        if (jumpType === JumpType.SNAKE && start <= end) return;
        if (jumpType === JumpType.LADDER && start >= end) return;

        this.cells[start]!.jump = new Jump(start,end,jumpType);
    }

    public getFinalPos(pos:number):number{
        
        while(this.cells[pos]?.jump){
            console.log(`You Moved from ${pos} to ${this.cells[pos].jump.endPos}`);
            return this.getFinalPos(this.cells[pos].jump.endPos);
        }

        return pos;
    }
}