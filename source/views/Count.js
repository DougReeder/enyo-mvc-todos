enyo.kind({
  name: "Todo.Count",
  tag: "span",
  id: "todo-count",
  published: {
    count: 0
  },
  content: enyo.Computed(function () {
    var c = this.count;
    return enyo.format("%. item%.left", c, c === 1? " ": "s ");
  }, "count")
});