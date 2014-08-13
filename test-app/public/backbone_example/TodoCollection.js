define(['TodoModel'], function(TodoModel) {
    var TodoCollection = new Backbone.Collection({
	model: TodoModel
    });
    return new TodoCollection();
});