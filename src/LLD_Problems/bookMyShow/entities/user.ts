export class User{
    constructor(private userId: number, private username:string ){

    }

    getUserId():number{
        return this.userId;
    }
}