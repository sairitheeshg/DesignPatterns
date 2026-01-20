export class Dice {
    public rollDie(n:number){
        let val = 0;
        while(n>0){
            val += Math.floor(Math.random()*6) + 1;
            n--;
        }

        return val;
    }
}