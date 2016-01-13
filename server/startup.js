Meteor.startup(function () {

if(Meteor.users.find().count() == 0) {
 var id = Accounts.createUser({
    email: "admin@theia.bg",
    password: "123123123",
    profile: { name: "Admin"}
  });

 Roles.addUsersToRoles(id, ['admin']);
}


});
