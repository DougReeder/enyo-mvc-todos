enyo.kind({
  name: "Todo.TodosController",
  kind: "enyo.CollectionController",
  collection: "Todo.TodosCollection",
  autoLoad: true,
  published: {
    filter: "all",
    filteredContent: null,
    completed: null,
    completedCount: null,
    remaining: null,
    remainingCount: null,
    toggleAllCompleted: false
  },
  
  // TODO: the only way to mitigate the additional overhead
  // of unnecessarily recalculating this pseudo-content is
  // very complex
  completed: enyo.Computed(function () {
    return this.collection.get("completed");
  }, "content"),
  
  completedCount: enyo.Computed(function () {
    return this.get("completed").length;
  }, "completed"),
  
  remaining: enyo.Computed(function () {
    return this.collection.get("remaining");
  }, "content"),
  
  remainingCount: enyo.Computed(function () {
    return this.get("remaining").length;
  }, "remaining"),
  
  filteredContent: enyo.Computed(function () {
    var f = this.get("filter"), ret;
    if (f === "all") ret = this.get("content");
    else if (f === "completed") ret = this.get("completed");
    else if (f === "active") ret = this.get("remaining");
    else ret = [];
    return ret;
  }, "content", "filter"),
  
  completedChanged: function () {
    if (!this.get("content")) return;
    if (this.get("completed").length === this.get("content").length
      && this.get("content").length !== 0) {
      this.set("toggleAllCompleted", true);
    } else {
      this.set("toggleAllCompleted", false);
    }
  },
  
  toggleAllCompletedChanged: function () {
    var c = this.content || [], len = c.length, i = 0, p = this.get("completed");
    if (this.toggleAllCompleted === false && c.length !== p.length) return;
    this.stopNotifications();
    for (; i < len; ++i) {
      if (c[i].get("completed") !== this.toggleAllCompleted) c[i].save("completed", this.toggleAllCompleted);
    }
    this.startNotifications();
  },
  clearCompleted: function () {
    this.remove(this.get("completed"));
  }
});