import { SnakesAndLadders } from "./game";
import { Board } from "./models/board";
import { Dice } from "./models/dice";
import { JumpType } from "./models/jump";

const dice = new Dice(6);
const board = new Board(100);

board.addJump(4,53,JumpType.LADDER);
board.addJump(53,8,JumpType.SNAKE);
board.addJump(23,7,JumpType.SNAKE);
board.addJump(43,99,JumpType.LADDER);
// board.addJump(100,100,JumpType.LADDER);

const newgame = new SnakesAndLadders(board,dice);
newgame.addPlayer("Player 1");
newgame.addPlayer("Player 2");
newgame.startGame();



// I ALSO NEED TO ADD VALIDATIONS FOR SNAKE CANNOT BE AT POSITION 1 AND 100 AND SAME APPLIES FOR LADDER IT CANT BE AT 100 but can be at 1
