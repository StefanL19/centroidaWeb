if (Meteor.isClient) {



  Router.configure({
    layoutTemplate: 'ApplicationLayout'
  });

   Router.route('/', function () {
    console.log("rendering root /");
    this.render("products", {to:"header"});
  });

   Router.route('/login', function () {
    console.log("rendering root /");
    this.render("loginAdmin", {to:"header"});
  });




Template.products.helpers({

  product:function(){

    return Products.find({});

  }

});

 
}//end of isClient block

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    if (Products.find().count() == 0) {



    

    Products.insert({
        number : 1,
        name : "Fustuchen Tahan",
        img: "image1.png", 
        prize : "10"
        
      });

    Products.insert({
        number : 2,
        name : "Leshnikov Tahan",
        img: "image1.png",
        prize : "11"
        
      });

    Products.insert({
        number : 3,
        name : "Susamov Tahan",
        img: "image1.png",
        prize : "12"
        
      });

    Products.insert({
        number : 4,
        name : "BIO Med",
        img: "image1.png", 
        prize : "12"
        
      });


    }

  });//end of the strartup function
}//end of isServer block
