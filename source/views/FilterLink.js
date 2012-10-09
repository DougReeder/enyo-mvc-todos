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