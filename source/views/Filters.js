enyo.kind({
  name: "Todo.Filters",
  id: "filters",
  tag: "ul",
  bindings: [
    {from: "Todo.todos.filter", to: "$.all.filter", oneWay: true},
    {from: "Todo.todos.filter", to: "$.active.filter", oneWay: true},
    {from: "Todo.todos.filter", to: "$.completed.filter", oneWay: true}
  ],
  components: [
    {tag: "li", components: [{kind: "Todo.FilterLink", content: "All", match: "all", name: "all"}]},
    {tag: "li", components: [{kind: "Todo.FilterLink", content: "Active", target: "active", name: "active"}]},
    {tag: "li", components: [{kind: "Todo.FilterLink", content: "Completed", target: "completed", name: "completed"}]}
  ]
});