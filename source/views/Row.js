enyo.kind({
  name: "Todo.Row",
  tag: "li",
  controllerClass: "Todo.RowController",
  published: {
    isCompleted: false,
    isEditing: false
  },
  bindings: [
    {from: "controller.completed", to: "isCompleted", oneWay: true},
    {from: "controller.isEditing", to: "isEditing", oneWay: true},
    {from: "controller.isEditing", to: "$.editor.showing", oneWay: true},
    {from: "controller.title", to: "$.editor.value", oneWay: true}
  ],
  components: [
    {classes: "view", components: [
      {bindProperty: "completed", bindTarget: "checked", kind: "enyo.Checkbox", classes: "toggle"},
      {name: "title", tag: "label", bindProperty: "title"},
      {kind: "Todo.DestroyRow", classes: "destroy"}]},
    {name: "editor", kind: "Todo.RowEditor", classes: "edit"}
  ],
  isCompletedChanged: function () {
    this.addRemoveClass("completed", this.isCompleted);
  },
  isEditingChanged: function () {
    this.addRemoveClass("editing", this.isEditing);
  }
});