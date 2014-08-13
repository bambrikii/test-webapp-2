(function() {

	require.config({
		baseUrl: '/',
		paths: {
			jquery:		'/bower_components/jquery/jquery',
			underscore:	'/bower_components/underscore/underscore',
			backbone:	'/bower_components/backbone/backbone',
			backgrid:	'/bower_components/backgrid/lib/backgrid',
			AppView:	'/backbone_example/AppView',
			TodoListView:	'/backbone_example/TodoListView',
			TodoModel:	'/backbone_example/TodoModel',
			TodoCollection:	'/backbone_example/TodoCollection'
		},
		shim: {
			backbone: {
				deps: [ 'underscore', 'jquery' ]
			},
			backgrid: {
				deps: [ 'backbone' ]
			}
		}
	});
	require(['jquery', 'backbone', 'AppView'], function($, Backbone, AppView) {

		var AppRouter = Backbone.Router.extend({
			routes: {
				'appView': 'showAppView'
			},
			defaultRoute: function( routeId ) {
				console.log('default route');
				var appView = new AppView();
				appView.renter();
			},
			showAppView: function () {
				console.log('show appView 1');
				var appView = new AppView();
				appView.render();
			}
		});

		var router = new AppRouter();
		Backbone.history.start();
		router.navigate("appView", {trigger: true});

	});

})();
