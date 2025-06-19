export const ContactAPI = {
  contacts: [
    {name: , image: , email: , phoneNumber: },
    {name: , image: , email: , phoneNumber: },
    {name: , image: , email: , phoneNumber: },
  ],
  all: function() {
    return this.contacts;
  },
  addContact: function({ name, image, email, phoneNumber }) {
    this.contacts.push({ name, image, email, phoneNumber })
  },
  get: function(id) {}
}