export {};
// Generic
class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();

nameQueue.add("Henson");
nameQueue.add("Andrei");

const numberQueue = new Queue<number>();
numberQueue.add(10);
