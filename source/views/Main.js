enyo.kind({
  name: "Todo.Main",
  id: "main",
  tag: "section",
  showing: false,
  published: {
    toggleAllOff: false
  },
  bindings: [
    {from: "Todo.todos.toggleAllCompleted", to: "$.toggleAll.checked", oneWay: true},
    {from: "Todo.todos.length", to: "$.toggleAll.showing", oneWay: true},
    {from: "Todo.todos.length", to: "showing", oneWay: true}
  ],
  components: [
    {kind: "Todo.ToggleAll", id: "toggle-all", name: "toggleAll", showing: false},
    {tag: "label", attributes: {for: "toggle-all"}, content: "Mark all as complete"},
    {kind: "Todo.List"}
  ]
});