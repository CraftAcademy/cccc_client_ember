import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://ca-address-book.herokuapp.com',
  namespace: 'api'
});
