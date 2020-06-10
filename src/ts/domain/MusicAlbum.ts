import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly author: string;
    readonly price: number;
    readonly multiInstance: boolean;
    quantity: number;

    constructor(
        id: number,
        name: string,
        author: string,
        price: number,
    ) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.multiInstance = false;
        this.quantity = 1;
    }
}