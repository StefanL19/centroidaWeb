Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render("navbar", {to: "header"});
    this.render("main", {to:"main"});
});


//this is the router for the add photo
//this is a completely test route
Router.route('/addPhoto', function () {
    this.render("postWYSIGEditor", {to: "header"});
});

//Router.route('/login', function(){
	//this.render('adminLogin', {to: "header"});
//});

