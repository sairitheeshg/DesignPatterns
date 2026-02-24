import * as readline from 'readline-sync';
import { Board } from "./models/board";
import { Dice } from "./models/dice";
import { Player } from "./models/player";

export class SnakesAndLadders{

    private players:Player[] = [];
    private winners: Player[] = [];

    constructor( private board: Board, private dice: Dice){}

    public addPlayer(name:string){
        const player = new Player(name,this.players.length+1);
        this.players.push(player);
    }

    public startGame(){
        console.log("GAME STARTED!")
        const queue = [...this.players];

        while(queue.length > 1){
            const currPlayer = queue.shift()!;

            console.log(`${currPlayer.name}'s Turn, Position: ${currPlayer.position}`);
            readline.question("Enter to Roll the dice");

            const roll = this.dice.roll();
            console.log(`Rolled a ${roll}`);

            this.movePlayer(currPlayer,roll);

            if(currPlayer.position === this.board.getSize()){
                console.log(`${currPlayer.name} reached the winning position!! Ranking: ${this.winners.length+1}`);
                this.winners.push(currPlayer);
            } else {
                queue.push(currPlayer);
            }
        }

        console.log("GAME OVER!");
    }

    private movePlayer(player:Player, roll:number){
        const target = player.position + roll;
        if(target > this.board.getSize()){
            console.log(`Rolled too high! ${player.name} stays at ${player.position}`);
            return;
        }

        const finalPos = this.board.getFinalPos(target);
        player.position = finalPos;
        console.log(`${player.name} moved to ${finalPos}`);
    }

}