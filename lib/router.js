
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});


//root - aboutus
Router.route('/', function () {
    this.render("navbar", {to: "navbar"})
    this.render("main", {to:"main"});
    this.render("footer", {to:"footer"})
});

//products
Router.route('/products', function () {
    this.render("navbar", {to: "navbar"})
    this.render("products", {to:"main"});
    this.render("footer", {to:"footer"})
});

Router.route('/products/:_id', function(){
	Session.set('prodId', this.params._id);
  this.render("navbar", {to: "navbar"})
	this.render("singleProduct", {to: "main"});
  this.render("footer", {to:"footer"})
});
//Recipes
Router.route('/meteorpost', function () {
    this.render("navbar", {to: "navbar"})
    this.render("meteorpost", {to:"main"});
    this.render("footer", {to:"footer"})
});

Router.route('/meteorpost/:_id', function(){
	Session.set('meteorId', this.params._id);
  console.log(Blog.Post.find({_id:Session.get('meteorId')}));
  this.render("navbar", {to: "navbar"})
	this.render("singlePost", {to: "main"});
  this.render("footer", {to:"footer"})
});
//contact
Router.route('/contact', function(){
  this.render("navbar", {to: "navbar"})
	this.render("contact", {to: "main"});
  this.render("footer", {to:"footer"})
});
// Router.route('/login', function(){
// 	this.render('adminLogin', {to: "main"});
// });
