Products = new Mongo.Collection('products');
Products.allow({
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

ProductSchema = new SimpleSchema({
      title: {
        type: String
      }
});
Products.attachSchema(ProductSchema);
