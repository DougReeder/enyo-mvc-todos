enyo.kind({
  name: "Todo.TodosCollection",
  kind: "enyo.Collection",
  model: "Todo.TodoModel",
  collectionProperties: {
    localStorage: new Store("todos-enyo"),
    completed: function () {
      return this.filter(function (todo) {
        return todo.get("completed");
      });
    },
    remaining: function () {
      return this.without.apply(this, this.completed());
    },
    nextOrder: function () {
      if (!this.length) {
        return 1;
      }
      return this.last().get("order") + 1;
    },
    comparator: function (todo) {
      return todo.get("order");
    }
  }
});