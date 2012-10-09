enyo.kind({
  name: "Todo.TodoRowController",
  kind: "enyo.ModelController",
  handlers: {
    onDestroyTapped: "destroyTapped",
    ondblclick: "rowTapped",
    onEnterPressed: "enterPressed",
    onEditorBlurred: "enterPressed"
  },
  published: {
    completedToggled: null,
    isEditing: false
  },
  destroyTapped: function () {
    Todo.todos.remove(this.model);
    return true;
  },
  rowTapped: function () {
    if (!this.isEditing) this.set("isEditing", true);
    return true;
  },
  enterPressed: function () {
    if (this.isEditing) this.set("isEditing", false);
  },
  isEditingChanged: function (prev, cur) {
    if (prev === true && cur === false && this.owner) {
      this.model.save({title: this.owner.get("$.editor").getValue()});
    }
  }
});

enyo.kind({
  name: "Todo.DestroyButton",
  kind: "enyo.Button",
  handlers: {
    ontap: "doDestroyTapped"
  },
  events: {
    onDestroyTapped: ""
  }
});

enyo.kind({
  name: "Todo.RowEditor",
  kind: "enyo.Input",
  handlers: {
    onkeyup: "keyup",
    onblur: "blur",
    onfocus: "focused"
  },
  events: {
    onEnterPressed: "",
    onEditorBlurred: ""
  },
  keyup: function (inSender, inEvent) {
    if (inEvent.which === 13) return this.doEnterPressed();
    return this.inherited(arguments);
  },
  showingChanged: function () {
    if (this.showing) this.focus();
  },
  blur: function () {
    this.doEditorBlurred();
    return true;
  }
});

enyo.kind({
  name: "Todo.TodoRow",
  tag: "li",
  controllerClass: "Todo.TodoRowController",
  published: {
    isCompleted: false,
    isEditing: false
  },
  bindings: [
    {from: "controller.completed", to: "isCompleted", oneWay: true},
    {from: "controller.isEditing", to: "isEditing", oneWay: true},
    {from: "controller.isEditing", to: "$.editor.showing", oneWay: true},
    
    // TODO: on change to named attribute matching on controller go ahead
    // and update this binding to the controller as opposed to view content
    {from: "$.title.content", to: "$.editor.value", oneWay: true}
  ],
  components: [
    {classes: "view", components: [
      {name: "completed", bindProperty: "active", kind: "enyo.Checkbox", classes: "toggle"},
      {name: "title", tag: "label"},
      {kind: "Todo.DestroyButton", classes: "destroy"}]},
    {name: "editor", kind: "Todo.RowEditor", classes: "edit"}
  ],
  isCompletedChanged: function () {
    this.addRemoveClass("completed", this.isCompleted);
  },
  isEditingChanged: function () {
    this.addRemoveClass("editing", this.isEditing);
  }
});

enyo.kind({
  name: "Todo.List",
  id: "todo-list",
  tag: "ul",
  kind: "enyo.CollectionRepeater",
  bindProperty: "filteredContent",
  controller: "Todo.todos",
  components: [
    {kind: "Todo.TodoRow"}
  ]
});