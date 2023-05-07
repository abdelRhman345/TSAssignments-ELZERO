// Create Interface Here
interface Client {
  id: number,
  username: string,
  active: boolean,
  discount: number,
  getPrice(price: number) : number
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`); // 100
console.log(`Client Name Is ${client.username}`); // Elzero
console.log(`Client Has Dicount ${client.discount}`); // 10
console.log(`Client Product After Discount Is ${client.getPrice(200)}`); // 190