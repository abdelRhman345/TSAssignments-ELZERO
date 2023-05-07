class Shorten {
  constructor (public id: number, public username: string, protected title: string) {
    console.log(this.title);
  }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

