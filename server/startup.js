Meteor.startup(function () {

if(Meteor.users.find().count() == 0) {
 var id = Accounts.createUser({
    email: "admin@theia.bg",
    password: "123123123",
    profile: { name: "Admin"}
  });

 Roles.addUsersToRoles(id, ['admin']);
}
if (Products.find().count() == 0) {
    Products.insert({
        name : "Fustuchen Tahan",
        img: "image1.png",
        price: 10

    });

    Products.insert({
        name : "Leshnikov Tahan",
        img: "image1.png",
        price: 10

    });

    Products.insert({
        name : "Susamov Tahan",
        img: "image1.png",
        price: 10

    });

    Products.insert({
        name : "BIO Med",
        img: "image1.png",
        price: 10

    });


}

    if (Photos.find().count() == 0) {
        Photos.insert({
            title: "default",
            src:"aboutDefault.jpg",
            alt:"some default image for about"
        });
    }


    if (Testimonials.find().count() == 0) {

        Testimonials.insert({

            title: "Article_About_Us",
            text: "something"

        });


        Testimonials.insert({

            title: "Article_Products",
            text: "something"
        });

    }

});
