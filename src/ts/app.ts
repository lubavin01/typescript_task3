import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
// console.log(cart.items);

 cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
 cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
 cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
 cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

 cart.add(new Smartphone(127, 'Xiaomi', 12000) );
 cart.add(new Smartphone(127, 'Xiaomi', 12000) );
 cart.add(new Smartphone(127, 'Xiaomi', 12000) );

 console.log(cart.items);

 
