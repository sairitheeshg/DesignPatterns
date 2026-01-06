//It is used when we need to decouple object creation logic from client code
// Keep all the functional code in your class and hand over the object creation to some factory


//Notification Service

interface NotificationService {
    sendNotification(): void
}

export class WhatsappNotification implements NotificationService {
    public sendNotification(): void {
        console.log("Whatsapp Notification Sent!");
    }
}

export class EmailNotification implements NotificationService {
    public sendNotification(): void {
        console.log("Email Notification Sent!");
    }
}

class NotificationFactory{
    public static getNotificationService(mode: string){  
        switch(mode){
            case "Whatsapp" : {
                return new WhatsappNotification();
            }
            case "Email" : {
                return new EmailNotification();
            }
            default : return new WhatsappNotification();
        }
    }
}

export class Notification {
    private notificationService: NotificationService;
    constructor(mode:string){
        this.notificationService = NotificationFactory.getNotificationService(mode);
    }

    public Notify(){
        this.notificationService.sendNotification();
    }
}


//Now the client should just see Notification and should send the notification by using the notify method and
// no complexity of object creation as it is decoupled to a new class

//TEST 

const whatsappnotification = new Notification("Whatsapp");
whatsappnotification.Notify();

const emailNotification =  new Notification("Email");
emailNotification.Notify();

//DONT THINK ABOUT USECASE ABOVE IS JUST AN EXAMPLE, IDEALLY WE COULD HAVE USED STRATEGY TO SELECT WHICH 
//NOTIFICATION TO CHOOSE AT RUN TIME - But use this just as an example