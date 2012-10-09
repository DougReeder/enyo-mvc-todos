enyo.app({
  name: "Todo",
  store: true,
  router: "Todo.Router",
  controller: "Todo.AppController",
  tag: "section",
  id: "todoapp",
  bindings: [
    {from: "Todo.todos.length", to: "$.footer.showing", oneWay: true}
  ],
  components: [
    {kind: "Todo.Header"},
    {kind: "Todo.Main", name: "main"},
    {kind: "Todo.Footer", name: "footer"}
  ],
  main: function () {
    enyo.singleton({
      name: "Todo.todos",
      kind: "Todo.TodosController"
    });
  }
});