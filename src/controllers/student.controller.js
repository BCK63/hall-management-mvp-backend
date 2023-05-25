const loginSchema = require('../validations/login.schema');

module.exports = {
  login: (req, res) => {
    try {
      const { email, password } = req.body;
      const { error, value } = loginSchema.validate(email, password);
      if (error) return res.send(error);
      if (value) return res.send(value);
    } catch (err) {
      console.log(err);
    }
  },
};
