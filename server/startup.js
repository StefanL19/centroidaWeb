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
    var object = {};
    Products.insert({
        title : "Фъстъчен тахан",
        img: "image1.png",
        price: 10,
        content: "TBD",
        value: object

    });

    Products.insert({
        title : "Лешников тахан",
        img: "image1.png",
        price: 10,
        content: "TBD",
        value: object

    });

    Products.insert({
        title : "Сусамов тахан",
        img: "image1.png",
        price: 10,
        content: "TBD",
        value: object

    });

    Products.insert({
        title : "Български БИО мед",
        img: "image1.png",
        price: 10,
        content: "TBD",
        value: object

    });


}

if (Recipes.find().count() == 0) {
  Recipes.insert({
    title: "Таханова торта",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet magna eusapien dignissim luctus. Cras eget venenatis elit. Maecenas ullamcorper in risus et consectetur.z"
  }),
  Recipes.insert({
    title: "Соларни сладки",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet magna eusapien dignissim luctus. Cras eget venenatis elit. Maecenas ullamcorper in risus et consectetur.z"
  }),
  Recipes.insert({
    title: "Назобани бухтички",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet magna eusapien dignissim luctus. Cras eget venenatis elit. Maecenas ullamcorper in risus et consectetur.z"
  })

}


});
