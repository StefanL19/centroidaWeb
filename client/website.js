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
        var familyName = event.target.family_name.value;
        var adress = event.target.adress.value;
        var quantity = event.target.quantity.value;
        var productName = Session.get('productName');
        var emailText = "Име: "+name +" "+familyName + "\r\n" + "Адрес: " + adress+ "\r\n" +
                          "Поръчка: " + quantity + "\r\n" + "Стока: " + productName + "\r\n" + "Email: " + email;
        var mailSubject = "Поръчка";
        console.log(emailText);


        Meteor.call('sendEmail',
            'testemail',
            'website',
          mailSubject,
            emailText);

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

//CONTACT
Template.contact.helpers({
   alerts: function() {
     return Session.get('contactErrors');
   }
})
Template.contact.events({
   'submit .js-send-message': function(event) {
       event.preventDefault();

       if(validateContactMail()) {
         var mailSubject = 'Съобщение от ' + event.target.email;
         var emailText = "Съобщение от " + event.target.name + ", с ел.поща -" + event.target.email + ": " + event.target.message ;
         Meteor.call('sendEmail' , 'testmail' , 'website' , mailSubject , emailText );
         Session.set('contactErrors', '');
       }

       function validateContactMail() {
         var errors = new Array();
        //  var emailRegex = /\S+@\S+\.\S+/;
        //  if(!emailRegex.test()) {
        //     errors.push('Невалидна електронна поща!');
        //     Session.set('contactErrors', errors);
        //     return false;
        //  }

         if(event.target.message.value.length < 50 ) {
           errors.push('Съобщението Ви трябва да съдържа поне 50 символа!');
           Session.set('contactErrors', errors);
           return false;
         }

         if(event.target.human.value != 5) {
           errors.push('Неправилна калкулация!');
           Session.set('contactErrors', errors);
           return false;
         }

         return true;
       }
     }

})
