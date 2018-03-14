import DS from 'ember-data';

export default DS.Model.extend({

  dev: DS.belongsTo('fe-dev')

});
