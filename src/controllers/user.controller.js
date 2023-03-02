const User = require('../models/user.model');

exports.getOneUser = (req, res) => {
    User.findById(req.userToken.id).then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found"
        })
      }
      res.send(user);
    })
      .catch(err => {
        res.status(400).send(err)
      })
  }

exports.updateUser = async (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.status(400).json({
                error: 'User not found'
            });
        }
        res.json(user);
    });
};
