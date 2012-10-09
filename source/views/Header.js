enyo.kind({
  name: "Todo.Header",
  tag: "header",
  id: "header",
  components: [
    {tag: "h1", content: "todos"},
    {id: "new-todo", kind: "Todo.NewTodo"}
  ]
});