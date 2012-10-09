enyo.kind({
  name: "Todo.NewTodoController",
  kind: "enyo.Controller",
  handlers: {
    onkeyup: "keyup"
  },
  keyup: function (inSender, inEvent) {
    if (inEvent.which === 13) {
      Todo.todos.add({title: this.owner.get("value")});
      this.owner.setNodeProperty("value", "");
    }
  }
});

enyo.kind({
  name: "Todo.NewTodo",
  kind: "enyo.Input",
  classes: "todo-input",
  placeholder: "What needs to be done?",
  controller: "Todo.NewTodoController"
});