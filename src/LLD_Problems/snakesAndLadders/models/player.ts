export enum PieceType {
    X = "X",
    Y = "Y"
}

export class Player{
    private playerId: number;
    public playerType: PieceType;
    public position: number;

    constructor(id:number,type: PieceType){
        this.playerId = id;
        this.playerType = type;
        this.position = 0;
    }

    public getPosition() : number {
        return this.position;
    }


}