import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Service.extend({

  ajax: service(),

  API_URL: 'https://api.giphy.com/v1/gifs/random',

  API_KEY: 'W4To6exX0CM9r1najhOJZYP6mJJ4pkJu',

  getApiUrl(keyword){
    const { API_URL, API_KEY } = this;
    return `${API_URL}?api_key=${API_KEY}&tag=${keyword}&rating=G`;
  },

  fetchGif(keyword){
    return new Promise(resolve => {
      const API_URL = this.getApiUrl(keyword);
      get(this, 'ajax').request( API_URL ).then(r => {
        resolve(r.data.fixed_height_downsampled_url);
      });
    })
  }

});
