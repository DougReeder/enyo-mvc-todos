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