export {};

const MenuItem = (target: Function) => {
  target.prototype.id = "abc";
};

@MenuItem
class Pizza {
  id: String;
}

class Hamburger {
  id: String;
}

console.log(new Pizza().id);
