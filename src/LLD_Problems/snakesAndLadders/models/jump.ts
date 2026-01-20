export enum JumpType{
    LADDER = "ladder",
    SNAKE = "snake"
}

export class Jump{
    jumpType: JumpType;
    startPos: number;
    endPos: number;

    constructor(type:JumpType, start:number, end:number){
        this.jumpType = type;
        this.startPos = start;
        this.endPos = end;
    }
}