Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
//root - aboutus
Router.route('/', function () {
    this.render("navbar", {to: "navbar"})
    this.render("main", {to:"main"});
});

//products
Router.route('/products', function () {
    this.render("navbar", {to: "navbar"})
    this.render("products", {to:"main"});
});

Router.route('/products/:_id', function(){
	Session.set('prodId', this.params._id);
  this.render("navbar", {to: "navbar"})
	this.render("singleProduct", {to: "main"});
});
//Recipes
Router.route('/recipes', function () {
    this.render("navbar", {to: "navbar"})
    this.render("products", {to:"main"});
});

Router.route('/recipes/:_id', function(){
	Session.set('recId', this.params._id);
  this.render("navbar", {to: "navbar"})
	this.render("singleRecipe", {to: "main"});
});
//contact
Router.route('/contact', function(){
  this.render("navbar", {to: "navbar"})
	this.render("contact", {to: "main"});
});
// Router.route('/login', function(){
// 	this.render('adminLogin', {to: "main"});
// });
