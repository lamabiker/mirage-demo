export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  const devs = [
    'Agustin',
    'Bruno',
    'Cian',
    'Darren',
    'Fernando',
    'Liam',
    'Mihaela',
    'Sasha',
    'Victor'
  ]

  devs.forEach(name => {
    server.create('fe-dev', { name });
  });
  
}
