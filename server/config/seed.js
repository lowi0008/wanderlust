/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Tour = require('../api/tour/tour.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    points: 0, 
    userTours: [{
      tourId: '5412383c411ff9aa0125524e', 
      tourSpots: [{
        info: 'Catch Pikachu',
        points: 20,
        completed: false
      }],
      tourCompleted:false, 
      accumulatedPoint: 20
    }],
    bio: 'This is a testing bio',
    city: 'San Francisco'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    points: 0,
    bio: 'This is a testing bio',
    city: 'San Francisco'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Tour.find({}).remove(function() {
  User.find({name:'Test User'}, function(err,user){
    Tour.create([{
      title: 'The Mission Mission',
      author: user._id,
      description: 'dig out the places to eat around Hack Reactor',
      city: 'San Francisco',
      reviews: [{body: 'This is awesome!',rating:4},{body: 'good', rating: 3}, {body: 'great tour!', rating: 5}],
      duration: 'All day',
      neighborhood: ['Mission'],
      spots: [{free:true, outdoors: true, task: 'Obtain a wooden sword from a pirate shop', address: '1 Market Street', points: '10'},
              {free:true, indoors: true, points: '5', task: 'Find the following graffiti'},
              {indoors: true, points: '20', task: 'Catch Pikachu'}]
    },{
      title: 'Wonderful Sunset',
      author: user._id,
      description: 'find out the good hiking place hidden here',
      city: 'San Francisco',
      reviews: [{body: 'nice tour', rating: 5}, {body: 'great fun', rating: 4.5}, {body: 'Cool!', rating: 4}],
      duration: 'All day',
      neighborhood: ['Inner-Sunset'],
      spots: [{free:false, outdoors: true, task: 'play basketball', address: '1 Market Street', points: '10'},
              {free:true, indoors: true, points: '5', task: 'find a basketball'},
              {indoors: true, points: '20', task: 'run around the court'}]
    },{
      title: 'Hill Conqueror',
      author: user._id,
      description: 'Climb all the hills for some stunning views',
      city: 'San Francisco',
      reviews: [{body: 'this was an awesome day', rating: 5}, {body: 'Awwwwwesome!', rating: 4}],
      duration: 'Half day',
      neighborhood: ['Downtown'],
      spots: [{free:false, outdoors: true, task: 'climb the hill', address: '1 Market Street', points: '15'},
              {free:true, indoors: true, points: '10', task: 'find something on the hill'},
              {indoors: true, points: '30', task: 'run up and down the hill'}]
    },{
      title: 'Street Art Explorer',
      author: user._id,
      description: 'Find the best street art',
      city: 'San Francisco',
      reviews: [{body: 'fun stuff', rating: 3},{body: 'good good good!', rating: 4}],
      duration: 'Half day',
      neighborhood: ['Lakeshore'],
      spots: [{free:false, outdoors: true, task: 'make good art', address: '1 Market Street', points: '25'},
              {free:true, indoors: true, points: '15', task: 'make art'},
              {indoors: true, points: '30', task: 'make better art'}]
    },{
      title: 'Grateful Dead Music Tour',
      author: user._id,
      description: 'A blast back to the 60s',
      city: 'San Francisco',
      reviews: [{body: 'exciting trip!', rating: 4},{body: 'definitely going again!', rating: 4}],
      duration: 'Many days',
      neighborhood: ['Golden-Gate-Park'],
      spots: [{free:false, outdoors: true, task: 'listen to music', address: '1 Market Street', points: '25'},
              {free:true, indoors: true, points: '15', task: 'find good music'},
              {indoors: true, points: '10', task: 'sing to the music'}]
    },{
      title: 'Farmers\' Market Extravaganza',
      author: user._id,
      description: 'All the fresh fruit and veggies',
      city: 'San Francisco',
      reviews: [{body: 'highly recommended', rating: 3},{body: 'fun!', rating: 4}],
      duration: 'Around an hour',
      neighborhood: ['Dogpatch'],
      spots: [{free:false, outdoors: true, task: 'find a steak', address: '1 Market Street', points: '25'},
              {free:true, indoors: true, points: '15', task: 'find some chicken'},
              {indoors: true, points: '30', task: 'find some fish'}]
    }]);
  })
});