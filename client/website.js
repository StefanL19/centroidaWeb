//subscriptions
Meteor.subscribe("photos");
Meteor.subscribe("testimonials");
Meteor.subscribe("products");


Template.products.helpers({

    product: function () {

        return Products.find({});

    },

    description: function(){
    	var filter = "Article_Products";
    	var object = Testimonials.findOne({title: filter});
    	return object;
    }
});


Template.aboutus.helpers({

default:function(){
	var photo = Photos.findOne({title: "default"});
	return photo;
},

about:function(){
	var filter = "Article_About_Us";
	var object = Testimonials.findOne({title: filter});
	return object;
}

});


