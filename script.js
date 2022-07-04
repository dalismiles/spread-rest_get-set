const obj1 = { foo: "bar" };
const obj2 = { name: "Mio nome" };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const newObj = (a, b) => {
  return { ...a, ...b };
};

console.log(newObj(obj1, obj2));

const value = "Dali";
obj3.value = value;

console.log(obj3);

(function () {
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Mio nome" };

  const obj3 = obj1.foo.concat(obj2.name);
  console.log(obj3);
});

const [fooX, nameX] = ["bar", "Mio nome"];
console.log(fooX, nameX, ...value);

const myStrings = [
  "ciao sono mia",
  "hey! ciao io sono paolo e ho 15 anni",
  "heyaaa!",
  "bad day!",
  "ciao io sono giovannino e vengo da librino",
  "ciao a tutti",
  "ciao!",
  "bonjour",
].filter((stringa) => {
  return stringa.length > 10;
});

console.log(myStrings);

let shop = {
  shopProducts: [
    { id: 1, item: "TV", price: 389 },
    { id: 2, item: "PC", price: 870 },
  ],

  get getItems() {
    return this.shopProducts;
  },
  set setItems(value) {
    this.shopProducts = [...this.shopProducts, value];
  },
};

console.log(shop.getItems);
shop.setItems = { id: 3, item: "iphone", price: 1280 };
console.log(shop.getItems);

const body = document.querySelector("body");
body.innerHTML = `
<h1>Our Shop</h1>
<ul>
<li class= "productCard"> <p>Codice Id ${shop.getItems[0].id}</p>  <p> Name: ${shop.getItems[0].name}</p> <p>Price: ${shop.getItems[0].price}</p> </li>
<li class= "productCard"> <p>Codice Id: ${shop.getItems[1].id}</p>  <p> Name: ${shop.getItems[1].name}</p> <p>Price: ${shop.getItems[1].price}</p> </li>
<li class= "productCard"> <p>Codice Id: ${shop.getItems[2].id}</p>  <p> Name: ${shop.getItems[2].name}</p> <p>Price: ${shop.getItems[2].price}</p> </li>
</ul>`;
