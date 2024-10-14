export class OrderDetail {
    subTotal: number;
    disCountPercentege: number;
    discount: number;
    deliverFee: number;
    totalValue: number;

    constructor() {
        this.subTotal = this.disCountPercentege = this.discount = this.deliverFee = this.totalValue = 0;
    }
}