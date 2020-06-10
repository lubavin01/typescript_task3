import Buyable from './Buyable';

export default class Smartphone implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly multiInstance: boolean;
    quantity: number;

    constructor(
        id: number,
        name: string,
        price: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.multiInstance = true;
        this.quantity = 1;
    }

}