import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const duplicate = this._items.find((i) => i.id === item.id);
        if (!duplicate) {
            this._items.push(item);
        } else if (item.multiInstance) {
            duplicate.quantity++;
        }
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    reduceQuantity(itemId: number): void {
        const item = this._items.find((i) => i.id === itemId);
        if (!item) {
            throw Error('can not find item by id');
        }

        if (!item.multiInstance) {
            throw Error('can not reduce quantity of non multi-instance good');
        }

        item.quantity--;
        if (item.quantity<1) {
            item.quantity = 1;
        }
    }
}