import { faker } from 'ember-cli-mirage';

function rand(max) {
  return Math.round(Math.random() * max);
}

export const catchphrase = faker.company.bs(5);

export const github = {
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
