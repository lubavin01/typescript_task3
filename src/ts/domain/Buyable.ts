export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly multiInstance: boolean,
    quantity: number
}