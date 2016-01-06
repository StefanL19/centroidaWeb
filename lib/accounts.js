AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'adminLogin',
    layoutTemplate: 'ApplicationLayout',
    redirect: '/admin',
});
