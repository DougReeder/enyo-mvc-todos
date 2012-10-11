enyo.kind({
  name: "Todo.TodosCollection",
  kind: "enyo.Collection",
  model: "Todo.TodoModel",
  
  collectionProperties: {
    localStorage: new Store("todos-enyo"),
  },
  
  completed: enyo.Computed(function () {
    return enyo.filter(this.content, function (model) {
      return model.get("completed");
    });
  }),
  
  remaining: enyo.Computed(function () {
   return enyo.filter(this.content, function (model) {
     return !model.get("completed");
   });
  }),
  
  didAdd: function (model) {
    model.save();
    this.inherited(arguments);
  },
  
  didRemove: function (model) {
    model.destroy();
    this.inherited(arguments);
  }
});