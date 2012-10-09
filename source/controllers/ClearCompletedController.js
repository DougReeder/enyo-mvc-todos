enyo.kind({
  name: "Todo.ClearCompletedController",
  kind: "enyo.Controller",
  handlers: {
    ontap: "tapped"
  },
  tapped: function () {
    Todo.todos.clearCompleted();
  }
});