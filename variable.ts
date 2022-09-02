export {};

// Variables
let myName = "";
myName = "klkl";

// Union Types
let anyType: string | null | number = null;
anyType = 23;
anyType = "anytype";

// Sample of Union Type function
const addShipping = (price: number, shipping: number): number | boolean => {
  return price + shipping;
};

addShipping(10, 5);

// Arrays
let items = ["test", 1, null, undefined]; // any type

// Interface
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void;
}

// Objects
const account: IAccount = {
  name: "Luis",
  balance: 10,
};

// Combining Array and Object
let accounts: IAccount[]; // this tell ts that we will store object of an account

// Classes
class InvestmentAccount implements IAccount {
  constructor(public name: string, public balance: number) {}

  private withdraw() {}
}
