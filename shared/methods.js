Meteor.methods({

	addPhoto:function(photo){
		console.log('add photo method');
		return Photos.insert(photo);
	}

});//end of meteor methods