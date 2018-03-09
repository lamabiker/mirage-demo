import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    const devId = params.dev_id;

    return this.get('store').findRecord('fe-dev', devId);
  }

});
