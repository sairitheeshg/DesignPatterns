import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000,() => {
    console.log("Server Started on Port 3000")
});
