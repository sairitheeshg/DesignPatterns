export class Student{
    //mandatory
    private name: string;
    private rollno: number;
    private age:number;
    //optional
    private classNum: number | undefined;
    private email: string | undefined;
    private gender: string | undefined;
    private phoneNumber: string | undefined;

    constructor(studentBuilder: StudentBuilder){
        this.name = studentBuilder.name;
        this.rollno = studentBuilder.rollno;
        this.age = studentBuilder.age;
        this.classNum = studentBuilder.classNum;
        this.email = studentBuilder.email;
        this.gender = studentBuilder.gender;
        this.phoneNumber = studentBuilder.phoneNumber;
    }
}

export class StudentBuilder{
    public name!: string;
    public rollno!: number;
    public age!:number;
    public classNum?: number;
    public email?:string;
    public gender?: string;
    public phoneNumber?: string;

    

    public setName(name: string): StudentBuilder {
        this.name = name;
        return this;
    }

    public setRollno(rollno: number): StudentBuilder {
        this.rollno = rollno;
        return this;
    }

    public setAge(age: number): StudentBuilder {
        this.age = age;
        return this;
    }

    public setClass(classNum: number): StudentBuilder {
        this.classNum = classNum;
        return this;
    }

    public setEmail(email: string): StudentBuilder {
        this.email = email;
        return this;
    }

    public setGender(gender: string): StudentBuilder {
        this.gender = gender;
        return this;
    }

    public setPhoneNumber(phoneNumber: string): StudentBuilder {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public build(){
        if (!this.name || !this.rollno || !this.age) {
            throw new Error('Mandatory fields (name, rollno, age) must be set before building Student');
        }
        return new Student(this);
    }

}


const studentBuilder = new StudentBuilder();

const student1 = studentBuilder.setAge(23).setClass(3).setRollno(1).setName("Johns").build();

console.log(student1);

