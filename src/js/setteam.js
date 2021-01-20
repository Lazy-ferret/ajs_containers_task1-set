export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(item) {
    if (this.members.has(item)) {
      throw new Error('Tакой объект уже существует в команде');
    }
    this.members.add(item);
  }

  addAll(items) {
    items.forEach((item) => {
      this.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
