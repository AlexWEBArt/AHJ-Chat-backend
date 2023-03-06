const subscriptions = {
  data: [],
  listeners: [],
  
  add(item) {
    this.data.push(item);
    console.log(this.data)
    this.listeners.forEach(handler => handler(item));
  },

  remove(item) {
    this.data = subscriptions.data.filter(sub => sub.nickname !== item);
    console.log(this.data)
    this.listeners.forEach(handler => handler(item));
  },
  
  listen(handler) {
    this.listeners.push(handler);
  },
}

module.exports = subscriptions;
