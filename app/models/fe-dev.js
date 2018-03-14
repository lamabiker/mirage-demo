import DS from 'ember-data';

export default DS.Model.extend({

  name:  DS.attr('string'),
  age:   DS.attr('number'),

  avatar: DS.attr('string'),
  aka:    DS.attr('string'),

});
