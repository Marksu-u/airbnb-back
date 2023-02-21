const User = require('../models/userModel');

User.statics.createAdmin = async function(firstName, lastName, email, password) {
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: 'Owner',
      isAdmin: true
    });
    await user.save();
    return user;
  };