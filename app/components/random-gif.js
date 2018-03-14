import Component from '@ember/component';
import { inject as service } from  '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({

  giphyService: service(),

  didInsertElement() {
    const kw = get(this, 'keyword');
    const giphyService = get(this, 'giphyService');

    giphyService.fetchGif(kw).then(r => {
      set(this, 'gif', r);
    })
  }

});
