Recipes = new Mongo.Collection('recipes');
Recipes.allow({
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

Schemas.Recipes = new SimpleSchema({
      title: {
        type: String
      },

      text: {
        type: String
      }

});
Recipes.attachSchema(Schemas.Recipes);
