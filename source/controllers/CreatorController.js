enyo.kind({
  name: "Todo.CreatorController",
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