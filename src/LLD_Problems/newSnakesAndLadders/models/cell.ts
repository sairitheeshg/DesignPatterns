import {Jump} from "./jump";

export class Cell{
    constructor(public readonly pos:number,public jump?:Jump){}
}