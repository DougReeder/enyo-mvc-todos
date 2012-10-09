enyo.kind({
  name: "Todo.List",
  id: "todo-list",
  tag: "ul",
  kind: "enyo.CollectionRepeater",
  bindProperty: "filteredContent",
  controller: "Todo.todos",
  components: [
    {kind: "Todo.Row"}
  ]
});