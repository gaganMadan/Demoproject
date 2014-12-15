define([
    'jquery',
    'underscore',
    'backbone',
    'models/person'
    
  ], function($,_,Backbone,Person){

   // The View for a Person
   var PersonView = Backbone.View.extend({

      tagName: 'li',
      template: _.template( $('#personTemplate').html()),
      events: {
          'click .edit' : 'editPerson',
          'click .delete' : 'DestroyPerson'
       },
      editPerson: function(){
        var newName = prompt("Please enter the new name", this.model.get('name'));
         if (!newName)return;  // don't do anything if cancel is pressed..
         this.model.set('name', newName);
      },
      initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this); // 3. Adding a destroy announcer..
      },
      DestroyPerson: function(){
          this.model.destroy();  // 2. calling backbone js destroy function to destroy that model object
         
      },
      render: function(){
         this.$el.html( this.template(this.model.toJSON()));
          return this;
       }

    });


    return PersonView;
})





