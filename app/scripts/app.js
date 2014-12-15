
define([
    'jquery',
    'backbone',
    'underscore',
    'collections/peopleCollection',
    'views/peopleView',
    'views/addPerson'
], function( $, Backbone, _, PeopleCollection,PeopleView,addPerson )
    {
       
        var initialize = function()
       {
            //Person.personData();
            
            
            // add data to people collection.
            var peopleCollection = new PeopleCollection([
              {
                  name: 'Mohit Jain',
                  age: 26
              },
              {
                  name: 'Taroon Tyagi',
                  age: 25,
                  occupation: 'web designer'
              },
              {
                  name: 'Rahul Narang',
                  age: 26,
                  occupation: 'Java Developer'
              },
              {
                  name: 'Gagan Madan',
                  age: 26,
                  occupation: 'Java Developer'
              }
            ]);
           
            var addPersonView = new addPerson({ collection: peopleCollection });
            var peopleView = new PeopleView({ collection: peopleCollection });
            $(document.body).append(peopleView.render().el);
           
        };
        return { initialize: initialize };
    });