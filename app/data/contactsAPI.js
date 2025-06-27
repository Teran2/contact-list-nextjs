export const ContactAPI = {
  contacts: [
    { name: 'Teran Arthur',
      image: 'https://yt3.googleusercontent.com/wkjDtbEI_eJhDeom6GHa0lj1o5Z9kaHk1jZw7Yo7SxhkPlvMnaA-tXFkTWtzfKiNoD8u0x8ksg=s900-c-k-c0x00ffffff-no-rj',
      email: 'TeransRealEmail@email.com',
      phoneNumber: "123-456-7890",
      uniqueId: 1},
    { name: 'Ember Foxx',
      image: 'https://images.firstpost.com/uploads/2025/03/Untitled-design-2025-03-06T165519.181-2025-03-c732c530fdacbdc6616703227f54a058.jpg?im=FitAndFill=(1200,675)',
      email: 'LegitEmail@email.com',
      phoneNumber: "192-837-5761",
      uniqueId: 2},
    { name: 'Tobias Forge',
      image: 'https://www.rollingstone.com/wp-content/uploads/2023/02/GettyImages-1240094644-2.jpg?w=1581&h=1054&crop=1',
      email: 'MrGhost@email.com',
      phoneNumber: "623-977-1900",
      uniqueId: 3},
  ],
  all: function() {
    return this.contacts;
  },
  addContact: function({ name, image, email, phoneNumber, uniqueId }) {
    this.contacts.push({ name, image, email, phoneNumber, uniqueId })
  },
  get: function(id) {
    const isContact = (c) => c.uniqueId === id;
    return this.contacts.find(isContact);
  }
}
