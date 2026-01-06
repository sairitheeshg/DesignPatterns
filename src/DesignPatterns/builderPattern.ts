// class BurgerMeal {
//     private bunType: string;
//     private patty: string;

//     //Optional
//     private hasCheese: boolean;
//     private topping: string;
//     private side: string;

//     private constructor(builder: BurgerBuilder) {
//         this.bunType = builder.bunType;
//         this.patty = builder.patty;
//         this.hasCheese = builder.hasCheese;
//         this.topping = builder.topping;
//         this.side = builder.side
//     }

//     private static class Builder{
//         private bunType: string;
//         private patty: string;

//         //Optional
//         private hasCheese: boolean;
//         private topping: string;
//         private side: string;

//         constructor(bunType: string, patty: string){
//             this.bunType = bunType;
//             this.patty = patty;
//         }

//         public withCheese(): Builder {
//             this.hasCheese = true;
//             return this;
//         }

//         public withTopping(topping:string): Builder{
//             this.topping = topping;
//             return this;
//         }

//         public withSide(side:string): Builder{
//             this.side = side;
//             return this;
//         }

//         public build(){
//             return new BurgerMeal(this);
//         }
//     }
// }

/*********************************************/

// WE COULDNOT USE ABOVE CODE IN TYPESCRIPT BECAUSE TS does NOT support static at CLASS level, it can be only used on methods 
// and properties AND ALSO TS DOESNOT support Inner Nested classes, So I commented the above code but that is how it would look in JAVA


//POINT TO NOTE : 
/**
 * In Java, inner classes and outer classes are "family"—they can see each other's private secrets. 
 * In TypeScript/JavaScript, a class is a "fortress"—private means private, even to its own static members.
 * The reason why inner class variables were private in above commented code but we had to make them public in below ts code
 */
/*********************************************/


class BurgerMeal {
    private bunType: string;
    private patty: string;

    //Optional
    private hasCheese: boolean;
    private topping: string;
    private side: string;

    private constructor(builder: InstanceType<typeof BurgerMeal.Builder>) {
        this.bunType = builder.bunType;
        this.patty = builder.patty;
        this.hasCheese = builder.hasCheese;
        this.topping = builder.topping;
        this.side = builder.side
    }

    static Builder = class BurgerBuilder {
        public bunType: string;
        public patty: string;

        //Optional
        public hasCheese: boolean = false;
        public topping: string = "";
        public side: string = "";

        constructor(bunType: string, patty: string){
            this.bunType = bunType;
            this.patty = patty;
        }

        public withCheese(): BurgerBuilder {
            this.hasCheese = true;
            return this;
        }

        public withTopping(topping:string): BurgerBuilder{
            this.topping = topping;
            return this;
        }

        public withSide(side:string): BurgerBuilder{
            this.side = side;
            return this;
        }

        public build(): BurgerMeal {
            //return new BurgerMeal(this);
            // FIX: Use 'as any' or a static helper because 
            // TS is strict about private constructors even in static inner classes
            return new (BurgerMeal as any)(this);
        }
    }
}


const burgerwithcheese = new BurgerMeal.Builder("Wheat", "NonVeg").withCheese().build();
console.log(burgerwithcheese);