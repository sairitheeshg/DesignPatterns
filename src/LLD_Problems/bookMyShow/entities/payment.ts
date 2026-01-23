export enum PaymentStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
};

export class Payment{
    constructor(private paymentStatus: PaymentStatus){

    }

    getPaymentStatus(): PaymentStatus{
        return this.paymentStatus;
    }
}