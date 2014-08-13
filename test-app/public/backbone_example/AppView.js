define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var AppView = Backbone.View.extend({
		el: $("#app_example_backbone"),
		template: _.template("<div>template 1</div>"),
		initialize: function() {
			console.log('initialize');
			_.bindAll(this, 'render');
		},
		render: function () {
			console.log('render');
			$(this.el).append("asd");
			return this;
		}
	});
	return AppView;
});
