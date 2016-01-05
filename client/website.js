//subscriptions
Meteor.subscribe("photos");
Meteor.subscribe("testimonials");
Meteor.subscribe("products");


Template.products.helpers({

    product: function () {

        return Products.find({});

    },
});


Template.aboutus.helpers({

default:function(){
	var photo = Photos.findOne({title: "default"});
	return photo;
},

});


Template.singleProduct.helpers({
    product:function(){
        var currentId = Session.get('prodId');
        var product = Products.findOne({_id:currentId});
        return product;
    }
});


