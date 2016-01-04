Meteor.publish("photos", function(argument){
	return Photos.find({});
});


Meteor.publish("testimonials", function(argument){
	return Testimonials.find({});
});


Meteor.publish("products", function(argument){
	return Products.find({});
});
