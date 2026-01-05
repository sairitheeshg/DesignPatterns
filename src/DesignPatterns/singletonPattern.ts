console.log("singletonPattern.ts EXECUTED");

export class SingleTon1{
    //EAGER SINGLETON
    private static _instance: SingleTon1 = new SingleTon1();

    private constructor(){
    }

    public static getSingleTonInstance(): SingleTon1 {
        return SingleTon1._instance;
    }
}


export class SingleTon2{
    //LAZY SINGLETON
    private static _instance: SingleTon2;

    private constructor(){
    }

    public static getSingleTonInstance(): SingleTon2 {
        if(!SingleTon2._instance){
            SingleTon2._instance = new SingleTon2();
        }
        return SingleTon2._instance;
    }
}



// const obj1 = new SingleTon(); if we do this, we'll get Constructor of class 'SingleTon' is private and only accessible within the class declaration ERROR

const obj1: SingleTon1 = SingleTon1.getSingleTonInstance();
const obj2: SingleTon1 = SingleTon1.getSingleTonInstance();


console.log(obj1 === obj2);