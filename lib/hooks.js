 animateContentOut = function() {
     $('#content').css('display', 'none');
     this.next();
}

 fadeContentIn = function() {
  $('#content').velocity('transition.fadeIn',1000);
}
  Router.onBeforeAction(animateContentOut)
  Router.onAfterAction(fadeContentIn)
