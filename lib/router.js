Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render("navbar", {to: "header"});
    this.render("main", {to:"main"});
});
