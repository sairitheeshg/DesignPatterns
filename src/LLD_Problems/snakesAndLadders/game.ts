import * as readline from 'readline-sync'
import { Board } from "./models/board";
import { Dice } from "./models/dice";
import { PieceType, Player } from "./models/player";

export class Game {
    private board: Board;
    private dice: Dice;
    private players: Player[];
    private currPlayerInd = 0;

    constructor(){
        this.board = new Board(100);
        this.dice = new Dice();
        this.players = [new Player(1,PieceType.X), new Player(2,PieceType.Y)];
    }

    startGame(){
        console.log("🎲 GAME STARTED!!\n");

        while(true){
            const gameOver = this.playTurn();
            if(gameOver) break;
        }
    }

    private playTurn(): boolean {
        const player = this.players[this.currPlayerInd]!;
        
        console.log(`\nPlayer ${player.playerType}'s Turn (Position: ${player.position})`);
        readline.question("Press Enter to throw the Dice....");

        const roll = this.dice.rollDie(1);
        console.log(`🎲 Rolled: ${roll}`);

        const oldPos = player.getPosition();
        const nextPos = this.board.getNextPos(oldPos,roll);
        player.position = nextPos;

        if(nextPos === oldPos) {
            console.log("Oops! You need a smaller number");
        }
        else if(nextPos > oldPos + roll){
            console.log(`🪜 Hurray!! You climbed a Ladder from ${oldPos + roll} to ${nextPos}`);
        } else if (nextPos < oldPos + roll){
            console.log(`🐍 Oops Snake!! You Slid from ${oldPos + roll} to ${nextPos}`);
        } else {
            console.log(`Moved to Position ${nextPos}`);
        }

        // Check for winner - early exit
        if(nextPos === 100){
            console.log(`\n🎉 Player ${player.playerType} wins the game!`);
            return true; // Game over
        }

        this.currPlayerInd = (this.currPlayerInd + 1) % (this.players.length);
        return false; // Game continues
    }

    public addLadder(start:number, end: number){
        this.board.addLadders(start,end);
    }

    public addSnake(start:number, end:number){
        this.board.addSnakes(start,end);
    }

}