enyo.kind({
  name: "Todo.Filters",
  id: "filters",
  tag: "ul",
  components: [
    {tag: "li", components: [
      {kind: "Todo.FilterLink", bindings: [{from: "Todo.todos.filter", to: ".filter", oneWay: true}],
        content: "All", match: "all"}]},
    {tag: "li", components: [
      {kind: "Todo.FilterLink", bindings: [{from: "Todo.todos.filter", to: ".filter", oneWay: true}],
        content: "Active", target: "active"}]},
    {tag: "li", components: [
      {kind: "Todo.FilterLink", bindings: [{from: "Todo.todos.filter", to: ".filter", oneWay: true}],
        content: "Completed", target: "completed"}]}
  ]
});

enyo.kind({
  name: "Todo.FilterLink",
  tag: "span",
  published: {
    filter: null,
    match: null,
    target: null
  },
  tap: function () {
    Todo.router.route(this.get("target") || "");
    return true;
  },
  filterChanged: function () {
    var f = this.filter, t = this.match || this.target;
    this.addRemoveClass("selected", f === t);
  }
});