import Route from '@ember/routing/route';

export default Route.extend({

  model() {

    // return {
    //   name: 'Thomas Ochman',
    //   email: 'thomas@craftacademy.se',
    //   company: 'Craft Academy',
    //   role: 'Founder & Head Coach',
    //   twitter: 'thomasochman',
    //   location: 'Sweden',
    //   info: 'Just a programmer, not a Ninja...',
    //   image: 'https://goo.gl/cctNRa'
    // }
    return this.store.findAll('contact');

  }
});
