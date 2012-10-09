enyo.kind({
  name: "Todo.ClearCompleted",
  kind: "enyo.Button",
  id: "clear-completed",
  controller: "Todo.ClearCompletedController",
  bindings: [
    {from: "count", to: "showing", oneWay: true}
  ],
  published: {
    count: 0
  },
  content: enyo.Computed(function () {
    return enyo.format("Clear completed (%.)", this.count);
  }, "count")
});