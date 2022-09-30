const User = require('./user.js')

const Book = require('./Books.js') 

User.hasMany(Book, {
    foreignKey: 'library_id',
    onDelete: 'CASCADE'
  });
  
  Book.belongsTo(User, {
    foreignKey: 'library_id'
  });
  
  module.exports = { User, Book };