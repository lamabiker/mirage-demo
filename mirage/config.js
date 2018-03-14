import { faker } from 'ember-cli-mirage';

function rand(max) {
  return Math.round(Math.random() * max);
}

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.passthrough('https://api.giphy.com/**');

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 1500;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.resource('fe-dev');

  this.get('stats/:id', () => {

    const age = rand(99);
    const github = {
      branches: rand(1000),
      commits: rand(900000),
      forks: rand(2000),
      issues: {
        created: rand(2000),
        closed: rand(2000),
      },
      repos: rand(200),
      stars: rand(50)
    };
    const catchphrase = faker.company.bs(5)

    return { age, github, catchphrase };
  })
}
