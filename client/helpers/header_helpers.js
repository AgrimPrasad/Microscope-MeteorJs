Template.header.helpers({
	pageTitle: function() {
		Session.set('pageTitle', "Agrim's Microscope");
		return Session.get('pageTitle');
	}
});