 animateContentOut = function() {
     console.log("animate");
     $('#content').css('display', 'none');
     this.next();
}

 fadeContentIn = function() {
  console.log("animate on after");
  $('#content').velocity('transition.fadeIn',1000);
}
  Router.onBeforeAction(animateContentOut)
  Router.onAfterAction(fadeContentIn)
