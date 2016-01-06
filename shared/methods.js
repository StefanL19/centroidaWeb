Meteor.methods({

	addPhoto:function(photo){
		console.log('add photo method');
		return Photos.insert(photo);
	},


	//this is the method for sending the email
	sendEmail: function (to, from, subject, text) {

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }

});//end of meteor methods