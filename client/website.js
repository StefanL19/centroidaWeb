//subscriptions
Meteor.subscribe("recipes");
Meteor.subscribe("products");

//PRODDUCTS
Template.products.helpers({
    product: function () {
        return Products.find({});
    },
});


Template.singleProduct.helpers({
    product:function(){
        var currentId = Session.get('prodId');
        var product = Products.findOne({_id:currentId});
        return product;
    }
});


Template.singleProduct.events({

    'click .modal_activate':function(event){
        console.log("clicked modal activate");
        $("#productOrder").modal('show');
    },

    'submit .js-add-order':function(event){
        var m = event.target.name;
        console.log(m);
    }

});


//RECIPES
Template.recipes.helpers({
    recipes: function () {
        return Recipes.find({});
    },
});



Template.singleRecipe.helpers({
    recipe:function(){
        var currentId = Session.get('recId');
        var recipe = Recipes.findOne({_id:currentId});
        return recipe;
    }
});
