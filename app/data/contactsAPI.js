export const ContactAPI = {
  contacts: [
    {id: 1, name: 'Teran Arthur', image: '', email: 'teransrealemail@email.com', phoneNumber: 97},
    {id: 2, name: 'Ember Foxx', image: '', email: 'legitemail@email.com', phoneNumber: 71},
    {id: 3, name: 'Tobias Forge', image: '', email: 'mrghost@email.com', phoneNumber: 900},
  ],
  all: function() {
    return this.contacts;
  },
  addContact: function({ name, image, email, phoneNumber }) {
    this.contacts.push({ name, image, email, phoneNumber })
  },
  get: function(id) {}
}