//subscriptions
Meteor.subscribe("recipes");
Meteor.subscribe("products");



//METEOR ALL POSTS HELPERS+EVENTS
Template.meteorpost.helpers({
    current_theme: function () {
        return Blog.Post.find({tags:"meteor"});
    },

});



Template.singlePost.helpers({
    post:function(){
        var currentId = Session.get('meteorId');
        var meteorpost = Blog.Post.find({_id:currentId});
        return meteorpost.fetch({})[0];
    }
});

//CONTACT
Template.contact.helpers({
   alerts: function() {
     return Session.get('contactErrors');
   }
})
Template.contact.events({
   'submit .js-send-message': function(event) {
       event.preventDefault();

       if(validateContactMail()) {
         var mailSubject = 'Message from ' + event.target.email;
         var emailText = "Message from " + event.target.name + ", with email -" + event.target.email + ": " + event.target.message ;
         Meteor.call('sendEmail' , 'testmail' , 'website' , mailSubject , emailText );
         Session.set('contactErrors', '');
       }

       function validateContactMail() {
         var errors = new Array();
        //  var emailRegex = /\S+@\S+\.\S+/;
        //  if(!emailRegex.test()) {
        //     errors.push('Невалидна електронна поща!');
        //     Session.set('contactErrors', errors);
        //     return false;
        //  }

         if(event.target.message.value.length < 50 ) {
           errors.push('Your message should be at least 50 symbols!');
           Session.set('contactErrors', errors);
           return false;
         }

         if(event.target.human.value != 5) {
           errors.push('Bad calculation!');
           Session.set('contactErrors', errors);
           return false;
         }

         return true;
       }
     }

})

Template.jumbotron.events({

  //METEOR LOGO EVENTS
  /////////////////
  ////////////
  'mouseleave .js-logo-meteor':function(event){
    event.preventDefault();
    event.stopPropagation();

    console.log($( window ).width() > 900);
    if ($( window ).width() > 900) {



      $(".meteor_tutorial").velocity({
      translateY: "0px"
    });


    $(".lineMeteor").velocity({ opacity: 0 } , { duration: 1000 });//velocity line meteor
    $(".js-sub-meteor").velocity({ opacity: 1 });


    }
    else{
      return;
    }
  },

  'mouseenter .js-logo-meteor':function(event){
    event.preventDefault();
    event.stopPropagation();

    if ($( window ).width() > 900) {
      $('.meteor_tutorial').velocity({

    translateY: "180px"

    });



       $(".lineMeteor").velocity({ opacity: 1 }, { duration: 1000 });//velocity line meteor
       $(".js-sub-meteor").velocity({ opacity: 0 });


    }
    else{
      return;
    }
    return false;
  },
  ////////////////////////////
  ///////////////////////
  ///////////////////
  //MATHEMATICS LOGO EVENTS
  ///////////////////////
  //////////////////
  ////////////

  'mouseenter .js-logo-math':function(event){

    event.preventDefault();
    event.stopPropagation();

    if ($( window ).width() > 900) {

      $('.math_tutorial').velocity({
    translateY: "180px"
    });

      $(".lineMath").velocity({ opacity: 1 }, { duration: 1000 });//velocity line mathematics
      $(".js-sub-math").velocity({ opacity: 0 });
    }
    else{
      return;
    }
    return false;

  },


  'mouseleave .js-logo-math':function(event){

    event.preventDefault();
    event.stopPropagation();

    console.log($( window ).width() > 900);

    if ($( window ).width() > 900) {

      $(".math_tutorial").velocity({

      translateY: "0px"

    });
       $(".lineMath").velocity({ opacity: 0 }, { duration: 1000 });//velocity line mathematics
       $(".js-sub-math").velocity({ opacity: 1 });

    }
    else{
      return;
    }

  }

})

//HELPERS AND EVENTS FOR THE EDUCATION POSTS


Template.education.helpers({

  "current_theme":function(){
        console.log(Blog.Post.find({description:"education"}).fetch({}));
        return Blog.Post.find({description:"education"});
  }

});

