enyo.kind({
  name: "Todo.Footer",
  tag: "footer",
  id: "footer",
  bindings: [
    {from: "Todo.todos.remainingCount", to: "$.counter.count", oneWay: true},
    {from: "Todo.todos.completedCount", to: "$.clear.count", oneWay: true}
  ],
  components: [
    {kind: "Todo.Count", name: "counter"},
    {kind: "Todo.Filters"},
    {kind: "Todo.ClearCompleted", name: "clear"}
  ]
});