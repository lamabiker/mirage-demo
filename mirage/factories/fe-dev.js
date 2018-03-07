import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.name.firstName();
  },

  age() {
    return Math.round(Math.random() * 99);
  }

});
