import { FileSystem } from "./filesystem";

export class File implements FileSystem{
    fileName: string;
    constructor(filename:string){
        this.fileName = filename;
    }

    ls(): void {
        console.log("File Name ", this.fileName);
    }
}