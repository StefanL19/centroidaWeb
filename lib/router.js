Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
    this.render("main", {to:"main"});
});




// Router.route('/login', function(){
// 	this.render('adminLogin', {to: "main"});
// });


Router.route('/product/:_id', function(){
	Session.set('prodId', this.params._id);
	this.render("singleProduct", {to: "main"});
});
