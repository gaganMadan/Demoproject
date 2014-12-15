
define([
    'jquery',
    'underscore',
    'backbone',
    'models/person'
  ], function($,_,Backbone,Person){

  	var PeopleCollection = Backbone.Collection.extend({
	  model: Person
	});
	return PeopleCollection;
})

