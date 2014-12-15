// View for all people
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/peopleCollection',
    'models/person',
    'views/personView'
  ], function($,_,Backbone,PeopleCollection,Person,PersonView){
  	
  	 var PeopleView = Backbone.View.extend({
		tagName : 'ul',
		initialize: function(){
			this.collection.on('add', this.addOne, this);  // listeners/anouncers for the collection on add..
	    },
	   
		render : function(){
			
			//loop over all person objects in the people collection.
			this.collection.each(function( Person ){
				var personView = new PersonView({ model: Person });
				this.$el.append(personView.render().el);
				
			},this)
			 return this; // returning this for chaining.
		},
		addOne: function(person){
		  var personView = new PersonView({ model: person });
		  this.$el.append(personView.render().$el);
		}

		
	})
   return PeopleView;


})

