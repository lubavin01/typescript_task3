import Cart from '../service/Cart';
import Smartphone from '../domain/Smartphone';
import Book from '../domain/Book';

const iphone = new Smartphone(1, 'iphone7', 19990);
const iphone2 = new Smartphone(1, 'iphone7', 14990);

const book1 = new Book(2, 'War and peace', 'Leo Tolstoy' , 190, 1500);
const book2 = new Book(2, 'War and peace', 'Leo Tolstoy' , 190, 1500);

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('multi instance adding increments quantity', () => {
  const cart = new Cart();

  cart.add(new Smartphone(152, 'iphone7', 19990));
  cart.add(new Smartphone(152, 'iphone7', 19990));
  cart.add(new Smartphone(152, 'iphone7', 19990));

  expect(cart.items.length).toBe(1);
  expect(cart.items[0].quantity).toBe(3);

  cart.reduceQuantity(152);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0].quantity).toBe(2);
  
});

test('multi instance reduce correct', () => {
  const cart = new Cart();

  cart.add(new Smartphone(152, 'iphone7', 19990));  
  cart.reduceQuantity(152);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0].quantity).toBe(1);
  
});

test('non multi instance item adding not increments quantity', () => {
  const cart = new Cart();

  cart.add(new Book(2, 'War and peace', 'Leo Tolstoy' , 190, 1500));
  cart.add(new Book(2, 'War and peace', 'Leo Tolstoy' , 190, 1500));
  cart.add(new Book(2, 'War and peace', 'Leo Tolstoy' , 190, 1500));

  expect(cart.items.length).toBe(1);
  expect(cart.items[0].quantity).toBe(1);
});

test('non multi instance reduce throws', () => {
  const cart = new Cart();

  cart.add(new Book(2, 'War and peace', 'Leo Tolstoy' , 190, 1500));
  
expect(() => {cart.reduceQuantity(2)}).toThrow();  
});

test('incorrect reduce argument throws', () => {
  const cart = new Cart();

  cart.add(new Book(10, 'War and peace', 'Leo Tolstoy' , 190, 1500));
  
expect(() => {cart.reduceQuantity(1)}).toThrow();
});


