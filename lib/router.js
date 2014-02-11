Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return Meteor.subscribe('posts');
	}
});

Router.map(function() {
	this.route('postsList', {path: '/'});

	this.route('postPage', {
		path: '/posts/:_id',
		data: function() {
			return Posts.findOne(this.params._id); //_id passed by the client stored in the
												   //params array of the router
		}
	});

	this.route('postSubmit', {
		path: '/submit'
	});

	var requireLogin = function() {
		if (!Meteor.user()) {
			if (Meteor.loggingIn())
				this.render(this.loadingTemplate);
			else
				this.render('accessDenied');

			this.stop();
		}
	};

	Router.before(requireLogin, {only : 'postSubmit'});
});