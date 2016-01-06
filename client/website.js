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
        Session.set('productName', product.title);
        return product;
    }
});


Template.singleProduct.events({

    'click .modal_activate':function(event){
        console.log("clicked modal activate");
        $("#productOrder").modal('show');
    },

    'submit .js-add-order':function(event){
        var email = event.target.email.value;
        var name = event.target.name.value;
        var family_name = event.target.family_name.value;
        var adress = event.target.adress.value;
        var quantity = event.target.quantity.value;
        var productName = Session.get('productName');
        var email_text = "Име: "+name +" "+family_name + "\r\n" + "Адрес: " + adress+ "\r\n" +
                          "Поръчка: " + quantity + "\r\n" + "Стока: " + productName + "\r\n" + "Email: " + email;
        var mailSubject = "Поръчка";
        console.log(email_text);


        Meteor.call('sendEmail',
            'testemail',
            'website',
          mailSubject,
            email_text);

        return false;
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
