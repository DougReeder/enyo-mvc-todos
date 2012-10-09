enyo.kind({
  name: "Todo.DestroyRow",
  kind: "enyo.Button",
  handlers: {
    ontap: "doDestroyTapped"
  },
  events: {
    onDestroyTapped: ""
  }
});