//Load 3 dummy objects into the mongo database
//on server start if the database is empty

if (Posts.find().count() == 0) {
	Posts.insert({
		title : 'Introducing Telescope',
		author : 'Sacha Greif',
		url : 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
	    title: 'Meteor',
	    author: 'Tom Coleman',
	    url: 'http://meteor.com'
  	});

  	Posts.insert({
	    title: 'The Meteor Book',
	    author: 'Tom Coleman',
	    url: 'http://themeteorbook.com'
  	});
}