module.exports = {
  validName: (name) => /^[a-zA-Z ]+$/.test(name) && name.length > 11,
  // validEmail: (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i.test(email),
  validEmail: (email) => /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email),
  validPassword: (password) => password.length > 5,
};
