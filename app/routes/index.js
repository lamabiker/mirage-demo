import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    const devs = this.get('store').findAll('fe-dev');

    return devs;
  }

});
