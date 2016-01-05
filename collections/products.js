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

Schemas.Products = new SimpleSchema({
      title: {
        type: String
      },
      price:{
        type: String
      },
      content:{
        type: String
      },
      value:{
        type: Object
      },
      img:{
        type: String
      }

});
Products.attachSchema(Schemas.Products);
