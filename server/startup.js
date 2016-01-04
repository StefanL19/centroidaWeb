Meteor.startup(function () {
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

});