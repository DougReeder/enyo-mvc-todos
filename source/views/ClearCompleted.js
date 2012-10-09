enyo.kind({
  name: "Todo.ClearCompletedController",
  kind: "enyo.Controller",
  handlers: {
    ontap: "tapped"
  },
  tapped: function () {
    Todo.todos.clearCompleted();
  }
});

enyo.kind({
  name: "Todo.ClearCompleted",
  kind: "enyo.Button",
  id: "clear-completed",
  controller: "Todo.ClearCompletedController",
  create: function () {
    this.inherited(arguments);
    // lets bind our showing state to the count so
    // we only show when there's more than one...
    this.binding({from: "count", to: "showing", oneWay: true});
  },
  published: {
    count: 0
  },
  content: enyo.Computed(function () {
    return enyo.format("Clear completed (%.)", this.count);
  }, "count")
});