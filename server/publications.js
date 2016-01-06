Meteor.publish("photos", function(argument){
	return Photos.find({});
});


Meteor.publish("recipes", function(argument){
	return Recipes.find({});
});


Meteor.publish("products", function(argument){
	return Products.find({});
});
