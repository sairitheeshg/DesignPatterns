import { Game } from "./game";

const snakesAndLadders = new Game();

snakesAndLadders.addLadder(3,54);
snakesAndLadders.addLadder(5,99);
snakesAndLadders.addLadder(9,88);


snakesAndLadders.addSnake(95,3);
snakesAndLadders.addSnake(2,1);
snakesAndLadders.addSnake(16,1);


snakesAndLadders.startGame();

