Meteor.publish('posts', function() {
	return Posts.find({ }, {fields : {author : false}, sort : {title : 1} } );
});