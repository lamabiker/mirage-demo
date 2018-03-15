import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

  ajax: service(),

  model(params) {
    const devId = params.dev_id;
    const stats = get(this, 'ajax').request( `/stats/${devId}` );

    return RSVP.hash({
      dev: this.get('store').findRecord('fe-dev', devId),
      stats
    });
  }

});
