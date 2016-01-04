//subscriptions
Meteor.subscribe("photos");
Meteor.subscribe("testimonials");
Meteor.subscribe("products");


Template.products.helpers({

    product: function () {

        return Products.find({});

    }
});
