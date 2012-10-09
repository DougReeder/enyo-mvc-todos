enyo.kind({
  name: "Todo.ToggleAllController",
  kind: "enyo.Controller",
  handlers: {
    onchange: "toggle"
  },
  toggle: function () {
    Todo.todos.set("toggleAllCompleted", !Todo.todos.toggleAllCompleted);
    return true;
  }
});

enyo.kind({
  name: "Todo.ToggleAll",
  kind: "enyo.Checkbox",
  controller: "Todo.ToggleAllController"
});