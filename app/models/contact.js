import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  company: DS.attr('string'),
  role: DS.attr('string'),
  twitter: DS.attr('string'),
  location: DS.attr('string'),
  info: DS.attr('string'),
  image: DS.attr('string')
});
