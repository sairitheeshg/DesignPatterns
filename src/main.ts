import express from "express";
import { SingleTon1, SingleTon2 }  from "./DesignPatterns/singletonPattern";


 const obj1: SingleTon1 = SingleTon1.getSingleTonInstance();
 const obj2: SingleTon1 = SingleTon1.getSingleTonInstance();

 console.log(obj1 === obj2); // WILL PRINT TRUE

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000,() => {
    console.log("Server Started on Port 3000")
});
