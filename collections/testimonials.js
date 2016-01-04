Testimonials = new Mongo.Collection('testimonials');
Testimonials.allow({
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

TestimonialSchema = new SimpleSchema({
      title: {
        type: String
      }

});
Testimonials.attachSchema(TestimonialSchema);
