import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.name.firstName();
  },

  age() {
    return Math.round(Math.random() * 99);
  },

  avatar(i) {
    return `https://picsum.photos/200/150/?liam=${i}&random`
  },

  aka() {
    return faker.internet.userName(2);
  }

});
