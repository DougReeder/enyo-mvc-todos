// this controller is a view-controller it has awareness of
// the view layer and organizes and controls it from the top-
// mode layer of the application
// the app controller can access its `$` as if it were the
// application itself
enyo.kind({
  name: "Todo.AppController",
  kind: "enyo.ApplicationController",

  beforeHandler: function (trigger) {
  },

  active: function () {
    Todo.todos.set("filter", "active");
  },
  
  completed: function () {
    Todo.todos.set("filter", "completed");
  },
  
  default: function () {
    Todo.todos.set("filter", "all");
  }
});