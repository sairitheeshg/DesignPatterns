import { FileSystem } from "./filesystem";

export class Directory implements FileSystem{
    directoryName:string;
    fileSystemList: FileSystem[];

    constructor(name:string){
        this.directoryName = name;
        this.fileSystemList = [];
    }

    public add(fs: FileSystem){
        this.fileSystemList.push(fs);
    }

    ls(): void {
        console.log("Directory Name ", this.directoryName);
        
        for(let fs of this.fileSystemList){
            fs.ls();
        }

    }
}