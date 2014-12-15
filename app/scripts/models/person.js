

// Person Model
define([
    'jquery',
    'underscore',
    'backbone'
  ], function($,_,Backbone){

  	 var PersonModel = Backbone.Model.extend({
	  defaults: {
	      name: 'Guest User',
	      age: 30,
	      occupation: 'worker'
	  }
	});
  	return PersonModel;
})


