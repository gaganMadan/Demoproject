define([
    'jquery',
    'underscore',
    'backbone',
    'collections/peopleCollection',
    'models/person',
    'views/personView'
  ], function($,_,Backbone,PeopleCollection,Person,PersonView){
  	
  	// Add Person View
	var addPerson = Backbone.View.extend({
		el : '#addPerson',
		events : {
			'submit' : 'submit'
		},
		submit : function(e){
			e.preventDefault();
			var newPersonName = $(e.currentTarget).find('input[type=text]').val();
			var person = new Person({name : newPersonName});
			this.collection.add(person);
		}
	})
    return addPerson;

   
})



