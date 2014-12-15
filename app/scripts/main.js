'use strict';
require.config({
    waitSeconds: 0,
    shim: {
       
        underscore: {
            exports: '_'
        },
         backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        
       // bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        underscore: '../../bower_components/underscore/underscore-min',
        backbone: '../../bower_components/backbone/backbone'
       //commonFunctions: '../customlibs/common.functions',
       // jqueryCardValidator: '../bower_components/jquery-creditcardvalidator/jquery.creditCardValidator',
        //jqueryValidation: '../bower_components/jquery.validate/index',
        //jqueryBackStretch: '../bower_components/jquery-backstretch/jquery.backstretch',
      //  jquery_migrate: '../bower_components/jquery/jquery-migrate',
        //localization_i18next: '../bower_components/localization-i18next/i18next',
       // anonymous_user_tracking: '../bower_components/anonymous_user_tracking/index'
    }
});
             
   //alert('start');
require(['backbone', 'app'], function(Backbone, App) {
    App.initialize();
    Backbone.history.start();
});


// define([
//     'jquery',
//     'underscore',
//     'backbone'
//   ], function($,cc,_){
//     alert(typeof cc);
// })


// Person Model
/*var Person = Backbone.Model.extend({
  defaults: {
      name: 'Guest User',
      age: 30,
      occupation: 'worker'
  }
});
var person = new Person();*/

// A List of People
/*var PeopleCollection = Backbone.Collection.extend({
  model: Person
});*/

// The View for a Person
/*var PersonView = Backbone.View.extend({

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
});*/

// add data to people collection.
// var peopleCollection = new PeopleCollection([
//   {
//       name: 'Mohit Jain',
//       age: 26
//   },
//   {
//       name: 'Taroon Tyagi',
//       age: 25,
//       occupation: 'web designer'
//   },
//   {
//       name: 'Rahul Narang',
//       age: 26,
//       occupation: 'Java Developer'
//   },
//   {
//       name: 'Gagan Madan',
//       age: 26,
//       occupation: 'Java Developer'
//   }
// ]);


// Collection View in backboneJS. A View that collect all smaaler view view and make it a complete giant view. Let's defing one:
// View for all people

/*var PeopleView = Backbone.View.extend({
	tagName : 'ul',
	initialize: function(){
      this.collection.on('add', this.addOne, this);  // listeners/anouncers for the collection on add..
	},

	render : function(){
		//console.log(person);
		//loop over all person objects in the people collection.
		this.collection.each(function( person ){
			//console.log(person);
			var personView = new PersonView({ model: person });
			this.$el.append(personView.render().el)
			//console.log(personView);
		},this)
		 return this; // returning this for chaining.
	},
	addOne: function(person){
	  var personView = new PersonView({ model: person });
	  this.$el.append(personView.render().$el);
	 }

	
})*/

// var addPerson = Backbone.View.extend({
// 	el : '#addPerson',
// 	events : {
// 		'submit' : 'submit'
// 	},
// 	submit : function(e){
// 		e.preventDefault();
// 		var newPersonName = $(e.currentTarget).find('input[type=text]').val();
// 		var person = new Person({name : newPersonName});
// 		this.collection.add(person);
// 	}
// })


//var addPersonView = new addPerson({ collection: peopleCollection });
//var peopleView = new PeopleView({ collection: peopleCollection });
//$(document.body).append(peopleView.render().el);
	// For the Add New Person 
    //1 Create a newView for newPerson and Read value from the textbox
    //2 Create a new model instance
    //3 Add into the collection
    //4 Render the new collection
