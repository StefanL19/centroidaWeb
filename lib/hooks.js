 animateContentOut = function() {
     console.log("animate");
     $('#content').removeClass("animated fadeIn");
     this.next();
}

 fadeContentIn = function() {
  console.log("animate on after");
  $('#content').addClass("animated fadeIn");
}
  Router.onBeforeAction(animateContentOut)
  Router.onAfterAction(fadeContentIn)
