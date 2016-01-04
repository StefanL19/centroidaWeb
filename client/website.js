//subscriptions
Meteor.subscribe("photos");
Meteor.subscribe("testimonials");
Meteor.subscribe("products");


Template.products.helpers({

    product: function () {

        return Products.find({});

    }
});


Template.aboutus.helpers({

default:function(){
	var photo = Photos.findOne({title: "default"});
	return photo;
}

});


