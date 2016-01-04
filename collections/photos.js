Photos = new Mongo.Collection('photos');
Photos.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
PhotoSchema = new SimpleSchema({
      title: {
        type: String
      },
      src: {
        type: String
      },
      alt: {
        type: String
      }


});
Photos.attachSchema(PhotoSchema);