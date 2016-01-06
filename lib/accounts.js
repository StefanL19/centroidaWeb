AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'adminLogin',
    layoutTemplate: 'ApplicationLayout',
    redirect: '/admin',
});


Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
});
