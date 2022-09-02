export {};

// Step in Configuring Decorators.
// 1. Go to the terminal and type npx tsx --init
// 2. Go to the created file and delete all the codes in there and
//    copy paste the code in this repository with a file name tsconfig.json.

const MenuItem = (itemID: string) => {
  return (target: Function) => {
    target.prototype.id = itemID;
  };
};

@MenuItem("abc")
class Pizza {
  id: string;
}

@MenuItem("xyz")
class Hamburger {
  id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);
