export enum JumpType{
    SNAKE = "snake",
    LADDER = "ladder"
}

export class Jump{
    constructor(public readonly start:number, public readonly endPos:number, public readonly jumpType: JumpType){
        if(jumpType === JumpType.SNAKE && endPos >= start) {
            throw new Error(`Snake must go down: start(${start}) must be > end(${endPos})`);
        }
        if(jumpType === JumpType.LADDER && endPos <= start) {
            throw new Error(`Ladder must go up: end(${endPos}) must be > start(${start})`);
        }
    }
}