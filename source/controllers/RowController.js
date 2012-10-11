enyo.kind({
  name: "Todo.RowController",
  kind: "enyo.ModelController",
  handlers: {
    onDestroyTapped: "destroyTapped",
    ondblclick: "rowTapped",
    onEnterPressed: "enterPressed",
    onEditorBlurred: "enterPressed"
  },
  published: {
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